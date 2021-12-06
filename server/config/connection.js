const mongoose = require('mongoose');
const connection = {};
// https://mongoosejs.com/docs/connections.html

async function connection(){
// check for existing connection
if(connection.isConnected) {
  console.log("db connection exists!");
  return;
}
// create new db connection (handle mongoose deprication)
const db = await mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

console.log("DB connection success!!")

connection.isConnected = db.connect[0].readyState;
console.dir(connection.isConnected);
}
connection();

module.exports = mongoose.connection;

///done 