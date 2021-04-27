#Different Application integration styles

##Different application integration styles
* Application share the same database
* Scheduled Batch job are run to extract data from Application 1 database to a feed file and then load the data  from feed files into Application 2
database via ETL
* RPC Calls can be acheived with RMI, CORBA, RESTful webservices, SOAP based webservice to share the data between two servies
* Async Messaging based integration where communication happends by publishing an event from one service and consumed in another services.

###1 Shared Database

where multiple application share the same database, this approach is simple, but has disadvantages such as 
1. Performance and bottlenecks and scalablity issues. The database dont really scale
2. Any adjustments to the database for one application will have side affects on aother applications. Complicates indexing and table partioning as different
have different tools
3. Concurrency & Timing issue as there could be chronological dependencies amoung that share the database. What about different applications working
on the same table concurrently. which if one application modifies the data that should have been altered by another application first?
   
###2 ETL
1. Application will have their own databases and the data from one application will be copied into another application's database via an over night
or regular interval batch jobs with an ETL process. Extract from one database and transform them into fed files. These feed files are then loaded or ingested into another
ingested into anther application's database.
2. NFR or on-demand data access that requires fast response.

###3 RPC
RPC is an inter-process communication that allows one program to directly call procedures in anther program either on the same machine or anther machine
on the network. An RPC is initiated by the client, which sends a request message to a known remote server to execute a specified procedure with 
supplied parameters. The remote server sends a response to the client and the application continues its process.

RPC is the earliest & simplest form of API using the “request–response” protocol. When this is implemented over HTTP or AMQP it becomes a Web API.
Web API
    * RESTFul
    * GraphQL
    * gRPC
    * SOAP
Application Programming Interface for either a web server or web browser. Web Api expose services via endpoints on a server where clients can connect via 
HTTP use that services. Clients can be a browser, mobile device or a web service client on aother web server.


````
App1 (REST client aka consumer) ==> JSON ==> App2 (REST service provider)
App1 (i.e. gRPC stub) ==> protobuff ==> App3 (i.e. gRPC Server) 
````

GraphQL is a WEB API works with a one endpoint with only POST verb and exchange JSON data. stateless like REST API. In Rest api the designers decide which 
which URL paths as GET/Users, GET/Users/1, GET/Users/1, GET/Addresses, GET/Addresses/2 ETC what verbs as in GET/users/1, POST/users/1, PUT /users/1, DETELE
