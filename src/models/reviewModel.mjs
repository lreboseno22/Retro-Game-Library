let reviews = [
    { id: 1, gameId: 2, userId: 2, text: "FUN GAME", rating: 5 },
    { id: 2, gameId: 1, userId: 1, text: "SO NOSTALGIC", rating: 4 }
]

export const getReviews = () => reviews;
export const findReviewById = (id) => reviews.find(r => r.id == id);