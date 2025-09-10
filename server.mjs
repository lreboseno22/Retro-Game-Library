import app from "./src/app.mjs";

const PORT = 3000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost:${PORT}`);
})