const express = require("express");
const router = express.Router();
const CustomerServices = require("../Services/CustomerServices");

/////////////////////////////////Profile/////////////////////////////////////
router.get("/Profile/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
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

    res.status(200).json("Profile Updated Successfully", updated);
  } catch (error) {
    res.status(404).json("Profile Not Found", error.message);
    next(error);
  }
});


module.exports = router;