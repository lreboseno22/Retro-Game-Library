import express from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
} from "../controllers/userController.mjs";


const router = express.Router();

router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users", createUser);

export default router;