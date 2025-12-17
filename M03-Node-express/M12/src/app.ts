import express, { json, Request, Response, Router } from "express";

import { initDB, pool } from "./config/db";
import { userRoutes } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

// parser
app.use(json());
// app.use(express.urlencoded())

// initializing db
initDB();

// logger middleware

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// users crud

app.use("/users", userRoutes);

// auth routes
app.use("/auth", authRoutes);

// app.get("/user/:id", );
// app.put("/user/:id", );
// app.delete("/user/:id", );

// TODO CRUD
app.post("/todos", async (req: Request, res: Response) => {
  const { user_id, title } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO todos(user_id, title) VALUES($1,$2) RETURNING *`,
      [user_id, title]
    );

    res.status(201).json({
      success: true,
      message: `TODO created`,
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/todos", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM todos`);
    res.status(201).json({
      success: true,
      message: "Todos retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

export default app;
