const express = require("express");
const router = express.Router();

const exampleController = require("../controllers/example");
const systemController = require("../controllers/system");
const core42Controller = require("../controllers/42core");

router.get("/status",  systemController.status);
router.get("/hello", exampleController.hello);
router.get("/42c", core42Controller.hello);

router.all("*", (req, res) => {
    res.status(400).json({ message: "Bad Request." });
});

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = router;
