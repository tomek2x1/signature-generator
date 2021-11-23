const express = require("express");
const router = express.Router();

router.use("/api/create", require("./create"));

module.exports = router;