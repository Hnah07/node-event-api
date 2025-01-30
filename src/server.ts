// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { notFound } from "./controllers/notFoundController";
import eventRoutes from "./routes/eventRoutes";
import { helloMiddleware } from "./middleware/exampleMiddleware";
import { specs } from "./swagger";
import swaggerUi from "swagger-ui-express";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Redirect to docs
app.get("/", (req, res) => {
  res.redirect("/api-docs"); //iedereen die de homepage bezoekt wordt redirect naar docs
});

// Routes
app.use("/api/events", eventRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.all("*", notFound);

// Database connection
try {
  if(!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env file");
  }
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connection OK");
} catch (err) {
  console.error(err);
  process.exit(1);
}

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}! 🚀`);
});
