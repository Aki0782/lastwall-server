import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import { addNewUser } from "./controllers/addNewUser.js";
import { getUsers } from "./controllers/getUsers.js";
import { searchuser } from "./controllers/searchUser.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", getUsers);
app.get("/search", searchuser);
app.post("/addNew", addNewUser);

mongoose.connect(process.env.MONGO_URI);
app.listen(PORT, () => console.log(PORT));
