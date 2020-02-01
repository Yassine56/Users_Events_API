import { Router } from "express";
import db from "../knex";
import { DatabaseError } from "../errors/general.errors";
import { Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    await db.raw(`
        CREATE TABLE IF NOT EXISTS users  (
          id serial PRIMARY KEY,
          email TEXT,
          password TEXT,
          phone_number TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE TABLE IF NOT EXISTS events  (
            id serial PRIMARY KEY,
            type TEXT,
            user_id TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          );
      `);
    return res.status(200).json({
      success: true,
      response: "TABLES CREATED"
    });
  } catch (err) {
    throw new DatabaseError();
  }
});

export default router;
