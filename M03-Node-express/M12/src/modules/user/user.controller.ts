import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userService } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await userService.createUser(name, email)
    // console.log(result.rows[0]);
    res.status(200).json({
      success: true,
      message: "Data inserted Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const userController = {
    createUser
}