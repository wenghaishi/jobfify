import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJob);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
