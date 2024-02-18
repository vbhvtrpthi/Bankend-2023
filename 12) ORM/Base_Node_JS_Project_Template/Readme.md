This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything. 


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

### Setup the project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations, models and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
 ```

`seeders` - put some default values to your db.
 - put seed data(starting data) into your file, generally used for testing purposes.

 - roles assignment in seeder file.

 # migrations
 - to do version controlling of your db.
 - simple langugae scripting files, where we write the version of the DB
 - cmnd to write versions `db migrate`

# Why ORM ?
- helps to avoid writing raw plain sql queries provide an oop approach to do the same
-  Install sequelize, also the driver along with it.

# sequelize cli
- To create db - `sequelize db:create`
- to create tables - `sequelize model:generate --name` , flag --name assigns a table name
- Migrate things, see the docs


Sequelize is an Object-Relational Mapping (ORM) library for Node.js. In simple terms, it's a tool that helps developers interact with relational databases using JavaScript objects and functions rather than writing SQL queries directly.

Here's what Sequelize does:

1. **Database Interaction Simplified:** Sequelize abstracts away the complexity of dealing with databases by allowing developers to work with JavaScript objects and methods to perform database operations like querying, inserting, updating, and deleting data.

2. **Model-Driven Approach:** It enables developers to define models in JavaScript that represent database tables. These models define the structure of the data and the relationships between tables.

3. **CRUD Operations:** Sequelize provides easy-to-use methods to perform CRUD (Create, Read, Update, Delete) operations on the database without writing raw SQL queries.

4. **Migration and Synchronization:** It offers tools to create and manage database schemas, allowing developers to create, update, or delete database tables and columns through code.

5. **Query Building:** Sequelize helps in constructing complex queries using JavaScript methods and operators, which it translates into appropriate SQL queries.

6. **Cross-Database Compatibility:** It supports various relational databases like PostgreSQL, MySQL, SQLite, and MSSQL, making it easy to switch between different databases without changing much of the code.

In essence, Sequelize simplifies database interactions in Node.js applications by providing an abstraction layer that allows developers to work with databases using JavaScript methods and models, enhancing productivity and reducing the need for writing repetitive SQL queries.