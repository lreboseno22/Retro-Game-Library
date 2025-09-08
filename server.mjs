import express from "express";

const app = express();
const PORT = 3000;

let games = [
    { id: 1, title: "Super Smash Bros", platform: "Nintendo 64", year: 1999},
    { id: 2, title: "Super Mario World", platform: "Super Nintendo (SNES)", year: 1990}
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to the Retro Game Library");
})

// GET all games
app.get("/api/games", (req, res) => {
    res.json(games);
})

// GET a single game by ID
app.get("/api/games/:id", (req, res) => {
    const game = games.find(g => g.id == req.params.id);
    if(!game) return res.status(404).send("Game not Found");
    res.json(game);
})

// POST a new game
app.post("/api/games", (req, res) => {
    const { title, platform, year } = req.body;
    const newGame = { 
        id: games[games.length - 1].id + 1,
        title,
        platform,
        year
    }

    games.push(newGame);
    res.status(201).json(newGame);
})

// PUT (update) a game
app.put("/api/games/:id", (req, res) => {
    const game = games.find(g => g.id == req.params.id);

    if(!game) return res.status(404).send("Game not Found");

    const { title, platform, year } = req.body;
    game.title = title ?? game.title;
    game.platform = platform ?? game.platform;
    game.year = year ?? game.year;

    res.json(game);
})

// DELETE a game by id
app.delete("/api/games/:id", (req, res) => {
    const id = req.params.id;
    
    const index = games.findIndex(g => g.id == id);
    if(index === -1){
        return res.status(404).send("Game not Found");
    }

    games.splice(index, 1);
    res.status(204).send();
})

app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost: ${PORT}`);
})