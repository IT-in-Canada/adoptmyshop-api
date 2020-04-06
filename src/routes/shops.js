const express = require("express");
const router = express.Router();

const Shop = require("../models/shop");

router.get("/", async (req, res, next) => {
    const result = await Shop.find().exec();
    res.status(200).json(result);
});

router.post("/", async (req, res, next) => {
    const newShop = {};
    for (const ops in req.body) {
        newShop[ops] = req.body[ops];
    }
    const shop = new Shop(newShop);
    var error = shop.validateSync();
    if (error) res.status(400).json(error);
    const result = await shop.save()
    res.status(201).json(result);
});

router.get("/:shopId", async (req, res, next) => {
    const id = req.params.shopId;
    const result = await Shop.findById(id).exec();
    if (!result) res.status(404).json();
    res.status(200).json(result);
});

router.patch("/:shopId", async (req, res, next) => {
    const id = req.params.shopId;
    const updateOps = {};
    for (const ops in req.body) {
        updateOps[ops] = req.body[ops];
    }
    const result = await Shop.updateOne({ _id: id }, updateOps).exec();
    if (result.n === 0) res.status(404).json();
    res.status(204).json();
});

router.delete("/:shopId", async (req, res, next) => {
    const id = req.params.shopId;
    const result = await Shop.deleteOne({ _id: id }).exec();
    if (result.n === 0) res.status(404).json();
    res.status(204).json();
});

module.exports = router;