import {
    getGames,
    addGame,
    findGameById,
    updateGame as updateGameModel,
    deleteGame as deleteGameModel
} from "../models/gameModel.mjs"


export const getLibrary = (req, res) => {
    let games = getGames();
    const { platform, year } = req.query;

    if(platform){
        games = games.filter(g => g.platform.toLowerCase().includes([platform.toLowerCase()]));
    }
    if(year){
        games = games.filter(g => g.year == year);
    }
    

    res.render("index", { games });
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
    const game = findGameById(req.params.id);
    if(!game) return res.status(404).send("Game not Found");
    res.render("editGame", { game });
}

export const updateGame = (req, res) => {
    const updated = updateGameModel(req.params.id, req.body);
    if(!updated) return res.status(404).send("Game not Found");
    res.redirect("/library");
}

export const deleteGame = (req, res) => {
    const deleted = deleteGameModel(req.params.id);
    if(!deleted) return res.status(404).send("Game not Found");
    res.redirect("/library");
}

// JSON
export const getAllGames = (req, res) => {
    let games = getGames();
    const { platform, year } = req.query;
    
    if(platform){
        games = games.filter(g => g.platform.toLowerCase().includes([platform.toLowerCase()]));
    }
    if(year){
        games = games.filter(g => g.year == year);
    }
    
    res.json(games);
}
export const getGameById = (req, res) => {
    const game = findGameById(req.params.id);

    if(!game) return res.status(404).send("Game not Found");
    res.json(game);
}
