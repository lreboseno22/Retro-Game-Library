import express from "express";
import {
    getAllUsers,
    getUserById,
} from "../controllers/userController.mjs";


const router = express.Router();

router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUserById);

export default router;