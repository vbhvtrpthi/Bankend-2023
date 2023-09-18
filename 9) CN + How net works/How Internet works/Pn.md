# Scenario of Hosts.txt
- Suppose new website is deployed, our locally present `hosts.txt` will not have it's mapping so it used to update itself from Network Information Manager (NIM) (centrally deployed)
- can go to `google.com` by directly putting up the ip address obatined from `dig` but not all website allows to access the resources by directly entering the ip address ex `bookmyshow.com`

# MVC
- ex Restaurant -> Menu (view) -> water (takes up the order) -> chef(all logic/ processes the order)
- Model(chef), view(menu card), controller(waiter)

# Setting up backend
- when we're setting up the backend there can be many layers 
- `middlewares` - if incoming req doesn't qualify certain criteria, can stop going beyond.
- `controllers` - if it's valid req, send it to backend
- In Mvc architecture, below mentioned layers comes under models.
    `service layer` - All business logics
     `models` - how db schema will look like (tables/collections)
     `repository` - service layer go through the repository layer in order to commu. with actual tables represented by `models` and send back data. why? good aggregation, separation of concerns, unit testing becomes easy
     
     ex- complex join query will be written in repository layer.
<img src="./Screenshots/mvc3.PNG"  width="500" height="300">