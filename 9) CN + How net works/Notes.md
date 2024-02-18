# Computer Networks
- sharing of resources and communication is the main agenda of CN (ex hackathon, apple airdrop)
- Initial browsers introduced after www, `Mosaic` and `Netscape`

# Protocols
- There are some rules/protocols which we take care if we want to parcel goods abroad or interstate, similary there are certain n/w protocols.

# Address and ports
- Ex- shipping a product at friend's address (here port is frnd's name as in the same address, there could be his/her family members too)

# end sytems
- Final physical client device that we are using ex -laptop, mobile phones etc.

# NIA
- h/w device which access n/w use to connect to n/w is `NIA`
- h/w device that helps your comp to connect to any n/w, single suite to connect to any n/w (internet,intranet (private internet),lan,wan)

# N/w protocol stack
- Ex- Shipping of the product from vendor to cx, vendor - amazon delivery(ad) picks up -> warehouse -> ships to warehouse at the cx location (diff warehouses are present) -> delivery boy picks up -> deliver to cx. In a similar fashion the data is transferred from a sender to receiver over a n/w.

- there is a sender as well as receiver's cycle.
- `session layer` - Any user session mgmt (when you login/logout of the website session is setup)

# Application layer
- 3 - ex gmail, fb, browser
- 3 - error handling here means data which user wants to put off on the n/w if it's not valid then it can be handled in this layer itself.
- client side - where user interacts ex google ui

# HTTP
- `Objects` - web pages are the main objects that contain other objects,(other objects can be mp3, mp4, png, jpg, etc), every object has an url.

- Server(`stateless`) doesn't store any info bout the client, if the client is requesting the same resource again and again server will respond (No optimization), it's a duty of devs to implement some `cache`/ `cookies` mechanism inordr to tc that client doesn't have to request the server for same resource again and again.

# HTTP Headers
- what can be sent ?  
  - extra piece of info like which device is making a request (maybe this info will be used by the end server before processing a req)
  - JWT token is also sent in headers (used to authenticate the user ex- we want our webapp to be used by folks who have logged in)
  - `patch` partial modifications, `put` replaces all current representations with the request payload
  - `User-Agent` in request header - it specifies the client, useful when server has different web pages that exists for different devices.
  - `Accept-Language:` specifies the preferred language server is going to check the webpage on.
  - `Connection:` non-persistent http connection parameter is 'close' and for persistent its 'open'
 
# [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

# Cookies
- As server is stateless, but it  want's to know whether the user is logged in or not to show different view to the user here `cookies` are helpful

Use PUT when you want to replace an entire resource or create a new one if it doesn't exist.

Use PATCH when you want to make partial updates to a resource without replacing it entirely, especially for large resources where sending the entire resource is inefficient.