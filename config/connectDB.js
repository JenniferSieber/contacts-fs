const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log(
      `Database Connected: 
      host: ${connect.connection.host} 
      dbname: ${connect.connection.name}`
      );
  }
  catch(err) {
    console.log(`Database connection error: ${err}`);
    process.exit(1);
  }
}

module.exports = connectDB;
