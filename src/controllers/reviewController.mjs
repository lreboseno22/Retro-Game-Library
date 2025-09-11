import {
    getReviews,
    findReviewById
} from "../models/reviewModel.mjs";

export const getAllReviews = (req, res) => res.json(getReviews());

export const getReviewById = (req, res) => {
    const review = findReviewById(req.params.id);
    if(!review) return res.status(404).send("Review not Found");
    res.json(review);
}