import { Router } from "express";
import { UserController} from "../controllers/EmployeeController";

const router = Router();

router.get("/", UserController.getEmployees);
router.get("/:id", UserController.getEmployee);
router.post("/", UserController.createEmployee);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
