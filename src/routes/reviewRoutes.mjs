import express from "express";

import {
    getAllReviews,
    getReviewById
} from "../controllers/reviewController.mjs";

const router = express.Router();

router.get("/api/reviews", getAllReviews);
router.get("/api/reviews/:id", getReviewById);


export default router;