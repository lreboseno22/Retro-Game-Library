import express from "express";
import {
    getLibrary,
    addGameForm,
    createGame,
    editGameForm,
    updateGame,
    deleteGame,
    getAllGames,
    getGameById
} from "../controllers/gameController.mjs";

const router = express.Router();

router.get("/library", getLibrary);
router.get("/add-game", addGameForm);
router.post("/api/games", createGame);
router.get("/edit-game/:id", editGameForm);
router.put("/api/games/:id", updateGame);
router.delete("/api/games/:id", deleteGame);

router.get("/api/games", getAllGames);
router.get("/api/games/:id", getGameById);

export default router;