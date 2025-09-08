import express from "express";
import mustacheExpress from "mustache-express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mustache setup
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./src/views");

// Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

let games = [
    { id: 1, title: "Super Smash Bros", platform: "Nintendo 64", year: 1999},
    { id: 2, title: "Super Mario World", platform: "Super Nintendo (SNES)", year: 1990}
]

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Retro Game Library");
})

app.get("/library", (req, res) => {
    res.render("index", { games });
})

app.get("/add-game", (req, res) => {
    res.render("addGame")
})

// POST a new game
app.post("/api/games", (req, res) => {
    const { title, platform, year } = req.body;
    const newGame = { 
        id: games[games.length - 1].id + 1,
        title,
        platform,
        year: parseInt(year)
    }

    games.push(newGame);
    res.redirect("/library");
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

// Not Found Handler
app.use((req, res) => {
    res.status(404).send("Route not Found");
})

// Global Error
app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost: ${PORT}`);
})