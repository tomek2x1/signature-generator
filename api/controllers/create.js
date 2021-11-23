const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try{
        console.log(req.body)
    } catch(e) {
        console.log(e)
    }
});

module.exports = router;