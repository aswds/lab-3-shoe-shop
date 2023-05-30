// routes/productRouter.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("../model/AvailableProducts");
const router = express.Router();

// Create a Multer storage instance
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize Multer upload middleware
const upload = multer({ storage });

// Define the Mongoose schema and model

// Define the POST route to handle product uploads
router.post("/api/addProduct", upload.single("image"), (req, res) => {
  const { filename, path: tempFilePath } = req.file;
  const { name, description, price } = req.body;

  const filePath = path.resolve(tempFilePath);
  const newProduct = new Product({
    name,
    description,
    price,
    fileName: filename,
    filePath: filePath,
  });

  newProduct
    .save()
    .then(() => {
      console.log("Success");
      res.sendStatus(200); // Send a 200 status code indicating success
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500); // Send a 500 status code indicating an internal server error
    });
});

router.get("/api/getProducts", (req, res) => {
  res.type("json");

  Product.find({})
    .then((products) => res.json(products))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
});
module.exports = router;
