const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middlewares/error");
const cloudinary = require("cloudinary");
const path = require("path");
const connection = require("./db/connection/connection");

require("dotenv").config({ path: "db/.env" });

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

connection();

const user = require("./routes/userRoute");
const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/", user);
app.use("/", product);
app.use("/", order);
app.use("/", payment);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
