show dbs
use lakshaykart
show collections

db.items.find()

db.anotherCollections.insertOne({Name:"Lakshay"})
show collections

// From this command u can change or update a database material
// This only updates one array
db.items.updateOne({name:"Xioami"},{$set:{price:100000}})

// This can update all the matching arrays
db.items.updateMany({rating:9.3},{$set:{name:"Apple"}})
