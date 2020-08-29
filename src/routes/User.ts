import { Router } from "express";

const router = Router();

router.get("/search", async (req, res) => res.json({ ok: true }));

export default router;
