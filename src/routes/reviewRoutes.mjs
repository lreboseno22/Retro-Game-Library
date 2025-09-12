import express from "express";

import {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview, 
    deleteReview
} from "../controllers/reviewController.mjs";

const router = express.Router();

router.get("/api/reviews", getAllReviews);
router.get("/api/reviews/:id", getReviewById);
router.post("/api/reviews", createReview);
router.put("/api/reviews/:id", updateReview);
router.delete("/api/reviwes/:id", deleteReview);

export default router;