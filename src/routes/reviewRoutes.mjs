import express from "express";

import {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview
} from "../controllers/reviewController.mjs";

const router = express.Router();

router.get("/api/reviews", getAllReviews);
router.get("/api/reviews/:id", getReviewById);
router.post("/api/reviews", createReview);
router.put("/api/reviews/:id", updateReview);


export default router;