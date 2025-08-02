const express = require("express");
const router = express.Router();
const CustomerServices = require("../Services/CustomerServices");

/////////////////////////////////Profile/////////////////////////////////////
router.get("/Profile/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("id", id)
    const profile = await CustomerServices.viewProfile(id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(404).json("Profile Not Found");
    next(error);
  }
});

router.put("/edit-profile/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updated = await CustomerServices.editProfile(id, updates);
    const profile = await CustomerServices.viewProfile(id);

    res.status(200).json(profile);
  } catch (error) {
    res.status(404).json("Profile Not Found", error.message);
    next(error);
  }
});


///////////////////////////////Addresses////////////////////////////

router.post("/add-address", async(req, res, next) => {
  try {
    const data = req.body;
    const added = await CustomerServices.addAddress(data);
    res.status(200).json(added);
  } catch (error) {
    res.status(404).json("Error Adding Address");
    next(error);
  }
});

router.get("/userAddresses/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const addresses = await CustomerServices.getUserAddresses(id);
    res.status(200).json(addresses);
  } catch (error) {
    res.status(404).json("Addresses Not Found");
    next(error);
  }
});

router.get("/address/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const address = await CustomerServices.getAddress(id);
    res.status(200).json(address);
  } catch (error) {
    res.status(404).json("Address Not Found");
    next(error);
  }
});

router.put("/edit-address/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const updatedAddress = await CustomerServices.editAddress(id, updates);
    res.status(200).json(updatedAddress);
  } catch (error) {
    res.status(404).json("Error Updating Address");
    next(error);
  }
});

router.delete("/remove-address/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await CustomerServices.removeAddress(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(404).json("Error Deleting Address");
    next(error);
  }
})

module.exports = router;