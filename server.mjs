import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to the Retro Game Library");
})

app.use(function(err, req, res, next){
    res.status(500).send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost: ${PORT}`);
})