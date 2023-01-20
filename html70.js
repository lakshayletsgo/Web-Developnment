show dbs
use lakshaykart
show collections

db.items.find({rating:9})

// Deleting files from Mongo Database
// Isse bas sabse pehle wala delete hoga
db.items.deleteOne({rating:9})

// Saare delete karne ke liye 
db.items.deleteMany({rating:9})