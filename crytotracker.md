factors

1.price
2.data
3.type[bitcoin,ethereum]


features

1.graph
2.multiple coin
3.create crypto


collection

1.crypto meta data =>currency
2.datawise price=>pricedata


mongoose acct as a middle man between us and mongodb ie,  we give instructions to mongoose and it will talk to mongodb

in src
routes(it will be handling the route and call the function in controllers) => controllers(performe business logic  and the function contact the models for updation and only
controller talk to models)=>models(it update the data in the database)=>db