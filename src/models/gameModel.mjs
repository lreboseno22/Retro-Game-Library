let games = [
    { id: 1, title: "Super Smash Bros", platform: "Nintendo 64", year: 1999},
    { id: 2, title: "Super Mario World", platform: "Super Nintendo (SNES)", year: 1990}
]

export const getGames = () => games;
export const addGame = (game) => games.push(game);
export const findGameById = (id) => games.find(g => g.id == id);