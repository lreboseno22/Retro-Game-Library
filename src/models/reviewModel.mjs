let reviews = [
    { id: 1, gameId: 2, userId: 2, text: "FUN GAME", rating: 5 },
    { id: 2, gameId: 1, userId: 1, text: "SO NOSTALGIC", rating: 4 }
]

export const getReviews = () => reviews;
export const findReviewById = (id) => reviews.find(r => r.id == id);
export const addReview = (review) => reviews.push(review);

export const updateReview = (id, updatedFields) => {
    const review = reviews.find(r => r.id == id);
    if(!review) return null;

    const { text, rating } = updatedFields;
    review.text = text ?? review.text;
    review.rating = rating ?? review.rating;

    return review;
}