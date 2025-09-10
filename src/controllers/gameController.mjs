import {
    getGames,
    addGame,
    findGameById
} from "../models/gameModel.mjs"


export const getLibrary = (req, res) => {
    res.render("index", { games: getGames });
}

export const addGameForm = (req, res) => {
    res.render("addGame");
}

export const createGame = (req, res) => {
    const { title, platform, year } = req.body;
    const games = getGames();

    if(!title || !platform || !year){
        return res.status(400).send("All fields are required.");
    }

    const newGame = { 
        id: games.length ? games[games.length - 1].id + 1 : 1,
        title,
        platform,
        year: parseInt(year)
    }

    addGame(newGame);
    res.redirect("/library");
}

export const editGameForm = (req, res) => {
    const game = games.find(g => g.id == req.params.id);

    if(!game) return res.status(404).send("Game not Found");
    res.render("editGame", { game });
}

export const updateGame = (req, res) => {
    const game = games.find(g => g.id == req.params.id);

    if(!game) return res.status(404).send("Game not Found");

    const { title, platform, year } = req.body;

    if(!title && !platform && !year){
        return res.status(400).send("At least one field must be provided to update.");
    }

    game.title = title ?? game.title;
    game.platform = platform ?? game.platform;
    game.year = year ?? game.year;

    res.redirect("/library");
}

export const deleteGame = (req, res) => {
    const id = req.params.id;
    
    const index = games.findIndex(g => g.id == id);
    if(index === -1){
        return res.status(404).send("Game not Found");
    }

    games.splice(index, 1);
    res.redirect("/library");
}

// JSON
export const getAllGames = (req, res) => res.json(games);
export const getGameById = (req, res) => {
    const game = findGameById(req.params.id);

    if(!game) return res.status(404).send("Game not Found");
    res.json(game);
}
