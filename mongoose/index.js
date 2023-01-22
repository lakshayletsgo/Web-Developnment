// Importing mongoose library 
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);//To remove the warning

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
// This is declaration of a schema in a mongoose
const kittySchema = new mongoose.Schema({
  name: String
});

// This is a method
kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name
  console.log(greeting);
};

// This is like a compiling of the schema iske baad schema me kuch changes nahi honge
// Isme jo bhi ham naam pass karege uske naam se save hoga document like here Lakshay ke naam se (Uska plural)
const Kitten = mongoose.model('Lakshay', kittySchema);

// This is putting values in the schema
const Example = new Kitten({ name: 'Lakshay2' });
// console.log(Example.name);

// This is a calling of a method
// Example.speak();


// This is saving in the mongod
Example.save(function(err,Example){
  if(err) return console.error(err);
  Example.speak();
});


const var2 = new Kitten({name:"Kitten2"});

var2.save(function(err,k){
  if(err)console.error(err);
  var2.speak();
})



// This is how you can find objects within the vs code. No need to go to the powershell
Kitten.find({name:"Lakshay2"},function(err,xyz){
  if(err)console.error(err);
  console.log(xyz);
})