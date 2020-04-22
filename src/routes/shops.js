const express = require("express");
const router = express.Router();
const ShopController = require("../controllers/shop.controller");

router.get("/", ShopController.find);
router.get('/:shopId', ShopController.findById);
router.post("/", ShopController.post);
router.patch('/:shopId', ShopController.patch);
router.delete('/:shopId', ShopController.delete);

module.exports = router;