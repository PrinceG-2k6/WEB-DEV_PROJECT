import express from "express";
import cors from "cors";
import appointmentsRoute from "./routes/appointments.js";

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Mounts the router at /api/appointments
app.use("/api/appointments", appointmentsRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
