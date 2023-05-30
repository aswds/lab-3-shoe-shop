const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const multer = require("multer");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Routes
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use("/", routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
