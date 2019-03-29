const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

router.get("/ping", bookController.ping);
router.get("/", bookController.get);
router.post("/", bookController.create);
router.post("/remove-all", bookController.removeAll);
router.get("/categories", bookController.getCategories);

module.exports = router;
