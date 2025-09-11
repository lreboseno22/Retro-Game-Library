import {
    getUsers,
    findUserById,
    addUser,
} from "../models/userModel.mjs";

export const getAllUsers = (req, res) => {
    res.json(getUsers());
}

export const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    if(!user) return res.status(404).send("User not Found");
    res.json(user);
}

export const createUser = (req, res) => {
    const { username, email } = req.body;
    if(!username || !email){
        return res.status(400).send("Username and email are required");
    }
    const users = getUsers();
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        username, 
        email
    }

    addUser(newUser);
    res.status(201).json(newUser);
}