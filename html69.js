// Searching Data in Mongo Database
use lakshaykart


// Give the query on the braces
db.items.find()
db.items.find({price:10000})


// This will give the items with price which is greater than or equal to 10000
db.items.find({price:{$gte:10000}})


// This will give the items with price which is greater than 10000
db.items.find({price:{$gt:10000}})

// This is AND operator
db.items.find({price:{$gte:10000}, rating:{$gte:5}})


// This is OR operator
db.items.find({$or:[{rating:{$gte:9}},{price:{$gte:10000}}]})


// If i have to see just the rating and the quantity
db.items.find({rating:{$gt:9}},{rating:1,qty:1})