let games = [
    { id: 1, title: "Super Smash Bros", platform: "Nintendo 64", year: 1999},
    { id: 2, title: "Super Mario World", platform: "Super Nintendo (SNES)", year: 1990}
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