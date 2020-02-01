import { Router } from "express";
import { EventController } from "../controllers/events.controller";

const router = Router();

router.get("/", EventController.getAllEvents);
router.get("/:event_id", EventController.getEventById);
router.post("/", EventController.CreateEvent);
router.get("/user/:user_id", EventController.getEventByUserId);
export default router;
