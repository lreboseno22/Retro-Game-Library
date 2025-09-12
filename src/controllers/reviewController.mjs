import {
    getReviews,
    findReviewById,
    addReview,
    updateReview as updateReviewModel,
    deleteReview as deleteReviewModel
} from "../models/reviewModel.mjs";

export const getAllReviews = (req, res) => res.json(getReviews());

export const getReviewById = (req, res) => {
    const review = findReviewById(req.params.id);
    if(!review) return res.status(404).send("Review not Found");
    res.json(review);
}

export const createReview = (req, res) => {
    const { gameId, userId, text, rating } = req.body;
    if(!gameId || !userId ||!text){
        return res.status(400).send("Game ID, UserID, and text are required");
    }

    const reviews = getReviews();
    const newReview = {
        id: reviews.length ? reviews[reviews.length - 1].id + 1 :1,
        gameId: parseInt(gameId),
        userId: parseInt(userId),
        text,
        rating: parseInt(rating) || 0
    };

    addReview(newReview);
    res.status(201).json(newReview);
}

export const updateReview = (req, res) => {
    const updated = updateReviewModel(req.params.id, req.body);
    if(!updated) return res.status(404).send("Review not Found");
    res.json(updated);
}

export const deleteReview = (req, res) => {
    const deleted = deleteReviewModel(req.params.id);
    if(!deleted) return res.status(404).send("Review not Found");
    res.json({ message: "Review deleted" });
}