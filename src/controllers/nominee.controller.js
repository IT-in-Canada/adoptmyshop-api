const Nominee = require("../models/nominee");

module.exports = {
    async find(req, res, next) {
        const result = await Nominee.find().exec();
        res.status(200).json(result);
    },

    async findById(req, res, next) {
        const id = req.params.nomineeId;
        const result = await Nominee.findById(id).exec();
        if (!result) res.status(404).json();
        res.status(200).json(result);
    },

    async post(req, res, next) {
        const newNominee = {};
        for (const ops in req.body) {
            newNominee[ops] = req.body[ops];
        }
        const nominee = new Nominee(newNominee);
        var error = nominee.validateSync();
        if (error) res.status(400).json(error);
        const result = await nominee.save();
        res.status(201).json(result);
    },

    async patch(req, res, next) {
        const id = req.params.nomineeId;
        const updateOps = {};
        for (const ops in req.body) {
            updateOps[ops] = req.body[ops];
        }
        const result = await Nominee.updateOne({ _id: id }, updateOps).exec();
        if (result.n === 0) res.status(404).json();
        res.status(204).json();
    },

    async delete(req, res, next) {
        const id = req.params.nomineeId;
        const result = await Nominee.deleteOne({ _id: id }).exec();
        if (result.n === 0) res.status(404).json();
        res.status(204).json();
    }
}; 