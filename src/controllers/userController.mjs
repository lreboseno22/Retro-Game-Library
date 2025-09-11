import {
    getUsers,
    findUserById,
} from "../models/userModel.mjs";

export const getAllUsers = (req, res) => {
    res.json(getUsers());
}

export const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    if(!user) return res.status(404).send("User not Found");
    res.json(user);
}