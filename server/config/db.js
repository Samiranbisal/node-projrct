const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const DBconnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    // console.log(`DATABASE CONNECTED ${conn.connection.host}`);
    console.log("DATABASE CONNECT");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;
