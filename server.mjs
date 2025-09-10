import express from "express";
import mustacheExpress from "mustache-express";
import methodOverride from "method-override";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Styling
app.use(express.static("public"));

// TESTING DELETE WITH THE MUSTACHE TEMPLATE
app.use(methodOverride("_method"));

app.use(methodOverride((req, res) => {
    if(req.body && typeof req.body === "object" && "_method" in req.body){
        return req.body._method;
    }
}));

// DEBUGGER AND LOGGER
app.use((req, res, next) => {
  console.log("DEBUG:", req.method, req.url, req.body);
  next();
});

// Mustache setup
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./src/views");

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

    if(!title || !platform || !year){
        return res.status(400).send("All fields are required.");
    }

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

// GET a single game by ID and render the editGame template
app.get("/edit-game/:id", (req, res) => {
    const game = games.find(g => g.id == req.params.id);
    if(!game) return res.status(404).send("Game not Found");
    res.render("editGame", { game });
})

// PUT (update) a game
app.put("/api/games/:id", (req, res) => {
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
})

// DELETE a game by id
app.delete("/api/games/:id", (req, res) => {
    const id = req.params.id;
    
    const index = games.findIndex(g => g.id == id);
    if(index === -1){
        return res.status(404).send("Game not Found");
    }

    games.splice(index, 1);
    res.redirect("/library");
})

// Not Found Handler
app.use((req, res) => {
    res.status(404).send("Route not Found");
})

// Global Error
app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost: ${PORT}`);
})