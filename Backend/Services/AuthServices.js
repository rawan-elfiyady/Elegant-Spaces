const UserRepo = require("../Repositories/UserRepository");
const CustomerRepo = require("../Repositories/CustomerRepository");
const JWT_SECRET = require("../Config/Jwt.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { use } = require("../Controllers/AuthController");

// Helpers to ensure email is not already taken
async function ensureCustomerEmailNotTaken(email) {
  const existing = await UserRepo.getUserByEmail(email);
  if (existing) {
    const err = new Error(`An Customer with email ${email} already exists`);
    err.status = 409;
    throw err;
  }
}

async function registerCustomer({ name, email, Password }) {
  // 1. Check For Already Existing Customer
  await ensureCustomerEmailNotTaken(email);

  // 2. Hash password
  const password = await bcrypt.hash(Password, 8);

  // 3. Insert Into Customers
  const customer = { name, email, password, role: "Customer" };

  await CustomerRepo.createCustomer(customer);

  const data = await CustomerRepo.getCustomerByEmail(email);

  // 4. Return minimal customer
  return {
    id: data.id,
    name: data.name,
    email: data.email,
  };
}

async function login({ email, Password }) {
  console.time("login-total");

  console.log("➡️ get in the function");

  console.time("⏳ DB Query");
  const user = await UserRepo.getUserByEmail(email);
  console.timeEnd("⏳ DB Query");

  if (!user) {
    const err = new Error("Invalid Credentials: Email Not Found");
    err.status = 401;
    throw err;
  }

  console.log("👤 User Found:", user.name);

  console.time("⏳ Password Compare");
  const match = await bcrypt.compare(Password, user.password);
  console.timeEnd("⏳ Password Compare");

  if (!match) {
    const err = new Error("Invalid Credentials: Wrong Password");
    err.status = 401;
    throw err;
  }

  console.time("⏳ JWT Sign");
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET.secret,
    { expiresIn: "2h" }
  );
  console.timeEnd("⏳ JWT Sign");

  console.timeEnd("login-total");

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
  };
}


module.exports = {
    registerCustomer,
    login
}
