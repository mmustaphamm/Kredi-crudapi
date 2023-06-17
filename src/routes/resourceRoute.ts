import { Router } from "express";
import { UserController } from "../controllers/resourceController";

const router = Router();

// router.get("/", UserController.getUsers);
// router.get("/:id", UserController.getOneUser);
router.get("/external", UserController.getExternalData);
// router.post("/", UserController.createUser);
// router.put("/:id", UserController.updateUser);
// router.delete("/:id", UserController.deleteUser);

export default router;
