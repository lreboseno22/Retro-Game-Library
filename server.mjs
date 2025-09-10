import express from "express";
import mustacheExpress from "mustache-express";
import methodOverride from "method-override";

import gameRoutes from "./src/routes/gameRoutes.mjs";
import { logger } from "./src/middleware/logger.mjs";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(logger);

// Necessary for deleting a game on browser
app.use(methodOverride((req, res) => {
    if(req.body && typeof req.body === "object" && "_method" in req.body){
        return req.body._method;
    }
}));

// Mustache setup
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./src/views");

// Routes
app.get("/", (req, res) => res.send("Welcome to the Retro Game Library"));
app.use("/", gameRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).send("Route not Found");
})

// Global Error Handler
app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost: ${PORT}`);
})