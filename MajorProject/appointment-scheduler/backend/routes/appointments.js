import express from "express";
import { db } from "../db.js";

const router = express.Router();

// GET all appointments
router.get("/", async (_, res) => {
  const [rows] = await db.query("SELECT * FROM appointments ORDER BY date_time");
  res.json(rows);
});

// POST new appointment
router.post("/", async (req, res) => {
  const { name, email, date_time } = req.body;
  await db.query(
    "INSERT INTO appointments (name, email, date_time) VALUES (?,?,?)",
    [name, email, date_time]
  );
  res.json({ message: "Appointment created" });
});

// DELETE appointment
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM appointments WHERE id=?", [req.params.id]);
  res.json({ message: "Deleted" });
});

export default router;
