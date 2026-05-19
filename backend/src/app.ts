import express from "express";
import userRoutes from "./modules/users/user.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/health", (_req, res) => {
  res.send("Broadcast Hub Backend Running 🚀");
});

export default app;