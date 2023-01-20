// Inserting Data in MongoDb
// Use mongosh to run a mongo shell
// Use mongod first to start a mongo server
use lakshaykart
db.items.insertOne({name:"Xioami",price:20000,rating:9, qty:1000, sold:10000})
db.items.insertMany([{name:"Xioami",price:20000,rating:9, qty:1000, sold:10000},{name:"Samsung",price:10000,rating:9.3,qty:2000,sold:20000},{name:"RealMe",price:20000,rating:9.3,qty:1000,sold:1300}])
