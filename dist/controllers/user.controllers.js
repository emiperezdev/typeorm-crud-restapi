"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName } = req.body;
    const user = new User_1.default();
    user.firstName = firstName;
    user.lastName = lastName;
    yield user.save();
    res.status(201).send(user);
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.find();
    return res.send(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const foundUser = yield User_1.default.findOneBy({ id: parseInt(id) });
    if (!foundUser)
        return res.status(404).send('User not found');
    return res.status(200).send(foundUser);
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName } = req.body;
    const { id } = req.params;
    const foundUser = yield User_1.default.findOneBy({ id: parseInt(id) });
    if (!foundUser)
        return res.status(404).send('User not found');
    yield User_1.default.update({ id: parseInt(id) }, {
        firstName: firstName,
        lastName: lastName
    });
    return res.status(204);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const foundUser = yield User_1.default.findOneBy({ id: parseInt(id) });
    if (!foundUser)
        return res.status(404).send('User not found');
    User_1.default.delete({ id: parseInt(id) });
    return res.status(200).send(foundUser);
});
exports.deleteUser = deleteUser;
