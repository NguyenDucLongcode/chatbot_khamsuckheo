import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

router.get("/", homeController.getHomePage);

router.post("/webhook", homeController.postWebhook);
router.get("/webhook", homeController.getWebhook);

export default router;
