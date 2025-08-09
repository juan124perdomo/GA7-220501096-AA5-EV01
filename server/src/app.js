import express from "express";
import morgan from "morgan";
import  authRoutes from "./routes/auth.routes.js";


const app = express();
app.use(morgan("dev"));
app.use(express.json()); // <-- Añadir esta línea

app.use('/api',authRoutes);

export default app;
