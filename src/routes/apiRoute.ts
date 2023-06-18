import { Router } from "express";
import { Entryapi } from "../controllers/ApiController";

const router = Router();

router.get("/entries", Entryapi.getAllEntries);
router.get("/filtered-entries", Entryapi.getFilteredEntries);
router.get("/category/:category", Entryapi.getCategory);

export default router;