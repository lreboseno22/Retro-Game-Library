import express from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser
} from "../controllers/userController.mjs";


const router = express.Router();

router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users", createUser);
router.put("/api/users/:id", updateUser);

export default router;