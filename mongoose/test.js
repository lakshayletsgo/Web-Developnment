const mongoose = require('mongoose');
mongoose.set('strictQuery', true);//To remove the warning

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("sample");
}