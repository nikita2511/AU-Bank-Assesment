const express = require("express");
const router = express.Router();
const { getStates, getStateMinMaxDates } = require("../controllers/controller");
router.get("/", getStates);
router.post("/", getStateMinMaxDates);
module.exports = router;
