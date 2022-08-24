const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongoose Connected");
    });
};

module.exports = connection;
