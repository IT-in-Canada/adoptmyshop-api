const Shop = require("../models/shop");

module.exports = {
    async find(req, res, next) {
        const result = await Shop.find().exec();
        res.status(200).json(result);
    },

    async findById(req, res, next) {
        const id = req.params.shopId;
        const result = await Shop.findById(id).exec();
        if (!result) res.status(404).json();
        res.status(200).json(result);
    },

    async post(req, res, next) {
        const newShop = {};
        for (const ops in req.body) {
            newShop[ops] = req.body[ops];
        }
        const shop = new Shop(newShop);
        var error = shop.validateSync();
        if (error) res.status(400).json(error);
        const result = await shop.save();
        res.status(201).json(result);
    },

    async patch(req, res, next) {
        const id = req.params.shopId;
        const updateOps = {};
        for (const ops in req.body) {
            updateOps[ops] = req.body[ops];
        }
        const result = await Shop.updateOne({ _id: id }, updateOps).exec();
        if (result.n === 0) res.status(404).json();
        res.status(204).json();
    },

    async delete(req, res, next) {
        const id = req.params.shopId;
        const result = await Shop.deleteOne({ _id: id }).exec();
        if (result.n === 0) res.status(404).json();
        res.status(204).json();
    },

    async publish(req, res, next) {
        // nomineeId to be published
        const nomineeId = req.params.nomineeId;
        const newShop = {};
        newShop["nominee_id"] = nomineeId;
        newShop["active"] = true;
        for (const ops in req.body) {
            newShop[ops] = req.body[ops];
        }
        const shop = new Shop(newShop);
        var error = shop.validateSync();
        if (error) res.status(400).json(error);
        const result = await shop.save();
        res.status(201).json(result);
    }
}; 