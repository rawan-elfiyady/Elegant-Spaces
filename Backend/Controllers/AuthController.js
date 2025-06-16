const express = require("express");
const router = express.Router();
const AuthServices = require("../Services/AuthServices");

router.post("/register", async(req, res, next) => {
    const { name, email, Password } = req.body;
    console.log({ name, email, Password })
    try {
        user = await AuthServices.registerCustomer({
            name,
            email,
            Password
        })
        res.status(201).json(user);
    } catch(err) {
        res.status(err.status || 500).json({ error: err.message }); 
    }
});

router.post("/login", async (req, res) => {
    const { email, Password, role } = req.body;

    try{
        user = await AuthServices.login({ email, Password, role });
        res.status(201).json(user);
    } catch(err) {
        res.status(err.status || 500).json({ error: err.message });
    }
});

module.exports = router;