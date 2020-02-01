import { Router } from "express";
import { UserController } from "../controllers/users.controller";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:user_id", UserController.getUserById);
router.post("/", UserController.CreateUser);
router.patch("/:user_id", UserController.UpdateUser);

export default router;
