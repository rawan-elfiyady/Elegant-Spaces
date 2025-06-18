const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

// Backend controllers
const authController = require('./Controllers/AuthController');
const AdminController = require("./Controllers/AdminController");
const CustomerController = require("./Controllers/CustomerController");
app.use(cors());
app.use(express.json());

// API routes
app.use('/auth', authController);
app.use ('/admin', AdminController);
app.use ('/customer', CustomerController);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
