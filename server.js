import express, { json, urlencoded } from "express";
import studentRouter from "./routes/student.routes.js";
import { dbConnection } from "./database/db.js";
const port = process.env.DB_PORT || 5000;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/student", studentRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, async () => {
  await dbConnection();
  console.log(`Server is running on port ${port}`);
});

export default app;
