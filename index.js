const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/payment.model.js");
const productRoute = require("./routes/product.route.js");
//middlewares
app.use(express.json());

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://kalanat:kalana123@merncluster.uykwyu9.mongodb.net/?retryWrites=true&w=majority&appName=MERNCLUSTER"
  )
  .then(() => {
    console.log("DB CONNECTION SUCCESS!!");
    app.listen(3000, () => {
      console.log("SERVER IS RUNNING ON PORT 3000!");
    });
  })
  .catch((e) => {
    console.log("DB CONNECTION FAILED!!!");
  });
