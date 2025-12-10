import express, { json, Request, Response, Router } from "express";

import config from "./config";
import { initDB, pool } from "./config/db";
import logger from "./middlewares/logger";
import { userRoutes } from "./modules/user/user.routes";

const app = express();
const port = config.port;

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

app.use("/users", userRoutes)

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      req.params.id,
    ]);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found ",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put("/user/:id", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
      [name, email, req.params.id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found ",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User Updated successfully",
        data: result.rows[0],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`DELETE FROM users WHERE id =$1`, [
      req.params.id,
    ]);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found ",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: result.rows,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
