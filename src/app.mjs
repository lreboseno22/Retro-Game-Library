import express from "express";
import mustacheExpress from "mustache-express";
import methodOverride from "method-override";
import gameRoutes from "./routes/gameRoutes.mjs";
import { logger } from "./middleware/logger.mjs"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For PUT/DELETE in forms
app.use(methodOverride("_method"));

// Necessary for deleting a game on browser
app.use(methodOverride((req, res) => {
    if(req.body && typeof req.body === "object" && "_method" in req.body){
        return req.body._method;
    }
}));

app.use(express.static("public"));
app.use(logger);

// Mustache setup
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./src/views");

// Routes
app.use("/", gameRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).send("Route not Found");
})

// Global Error Handler
app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})

export default app;