import express from "express";
import userRoutes from "./modules/users/user.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (_req, res) => {
  return res.send("Broadcast Hub Backend Running 🚀");
});

app.get("/health", (_req, res) => {
  return res.json({ status: "ok" });
});


export default app;