// telegram bot name - vbhvtrpthi_bot
const { Telegraf } = require("telegraf");
const axios = require('axios');
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome to Vaibhav Tripathi's bot"));

bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.on("sticker", (ctx) => ctx.reply("❤️"));
bot.on("emoji", (ctx) => ctx.reply("❤️"));

bot.command('hipster', Telegraf.reply('λ'))
bot.command('search', async (ctx) => {
    const response = await axios.get('https://raw.githubusercontent.com/vbhvtrpthi/LeetCode/main/0035-search-insert-position/0035-search-insert-position.java');
    console.log("response value is", response.data);
    ctx.reply(response.data)
})

bot.command('downloadYT', async (ctx) => {
    ctx.reply("Copy the youtube url")
    bot.on("text", (ctx) => {
          try {
            console.log(ctx.update.message.text);
            if (ctx.update.message.text == "I love you")
              ctx.reply("I Love you too bro");
            else{
                ctx.reply("How can I help you");
            }
          } catch {
            ctx.reply("I didn't understood your text");
          }
        });
})

// bot.on("text", (ctx) => {
//   try {
//     console.log(ctx.update.message.text);
//     if (ctx.update.message.text == "I love you")
//       ctx.reply("I Love you too bro");
//     else{
//         ctx.reply("How can I help you");
//     }
//   } catch {
//     ctx.reply("I didn't understood your text");
//   }
// });

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch();
