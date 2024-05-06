import express from "express";

import getDepartments from "../controllers/getDepartments";

const router = express.Router();

router.get("/departments", getDepartments);

export default router;
