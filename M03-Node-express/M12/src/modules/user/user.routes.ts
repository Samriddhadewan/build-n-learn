import express, { Request, Response } from "express";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", auth("admin"), userController.getUser);
router.get("/:id", auth("admin"), userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export const userRoutes = router;
