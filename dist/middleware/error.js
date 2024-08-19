"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, next) => {
    console.log(err, err.message);
    res.status(500).send('SOMETHING FAILED :/');
};
exports.default = error;
