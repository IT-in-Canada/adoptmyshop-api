const express = require("express");
const router = express.Router();
const NomineeController = require("../controllers/nominee.controller");
const ShopController = require("../controllers/shop.controller");

router.get("/", NomineeController.find);
router.get('/:nomineeId', NomineeController.findById);
router.post("/", NomineeController.post);
router.patch('/:nomineeId', NomineeController.patch);
router.delete('/:nomineeId', NomineeController.delete);
router.post('/:nomineeId/publish', ShopController.publish);

module.exports = router;