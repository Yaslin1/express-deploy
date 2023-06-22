//Setting up our API route 
import {onRequest} from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";
import { getAllCandy, addNewCandy, updateCandyById } from "./src/candy.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => {
    logger.info("Someone hit my API. Wow.")
    res.send ("It's working")
});
//Cloud Function

app.get("/candy", getAllCandy);
app.post("/candy", addNewCandy);
app.patch("/candy/:candyId", updateCandyById) //candyID is a paramater

export const api = onRequest(app) //onRequest getting it from line one. If a request comes in send it to app.