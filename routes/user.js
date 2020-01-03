const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "Gangadhara" });
});
module.exports = router;
