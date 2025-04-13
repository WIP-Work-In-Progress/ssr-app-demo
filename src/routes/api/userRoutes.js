const userController = require("../../controllers/api/userController");
const express = require("express");
const router = express.Router();

router.get("/", userController.getAll);
router.get("/:username", userController.getByUsername);
router.post("/", userController.create);

module.exports = router;
