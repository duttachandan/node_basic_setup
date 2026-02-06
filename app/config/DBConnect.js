require("dotenv").config();
const mongoose = require("mongoose");

module.exports = async () => {
  const data = await mongoose.connect(`${process.env.MONGO_URL}`);
  if (!data) {
    console.log("connection not established", data);
  } else {
    console.log("connection successfull");
  }
};

