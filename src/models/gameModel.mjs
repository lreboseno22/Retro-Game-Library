let games = [
    { id: 1, title: "Super Smash Bros", platform: "Nintendo 64", year: 1999},
    { id: 2, title: "Super Mario World", platform: "SNES", year: 1990},
    { id: 3, title: "The Legend of Zelda", platform: "NES", year: 1986 },
    { id: 4, title: "Tetris", platform: "Game Boy", year: 1989 },
    { id: 5, title: "Super Mario Bros.", platform: "NES", year: 1985 },
    { id: 6, title: "Mega Man 2", platform: "NES", year: 1988 },
    { id: 7, title: "Pokémon Red", platform: "Game Boy", year: 1996 },
    { id: 8, title: "Donkey Kong Country", platform: "SNES", year: 1994 },
]

export const getGames = () => games;
export const addGame = (game) => games.push(game);
export const findGameById = (id) => games.find(g => g.id == id);
export const updateGame = (id, updatedFields) => {
    const game = games.find(g => g.id == id);
    if(!game) return null;

    const { title, platform, year } = updatedFields;

    game.title = title ?? game.title;
    game.platform = platform ?? game.platform;
    game.year = year ?? game.year;

    return game;
}
export const deleteGame = (id) => {
    const index = games.findIndex(g => g.id == id);
    if(index === -1) return null;

    games.splice(index, 1);
    return true;
}