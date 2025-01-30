import express from "express";
import {
  getEvents, addEvent, getEventById, updateEvent, deleteEvent
} from "../controllers/eventController";

const router = express.Router();

router
  .get("/events", getEvents)
  .post("/events", addEvent)
  .get("/events/:id", getEventById)
  .put("/events/:id", updateEvent)
  .delete("/events/:id", deleteEvent);

export default router;
