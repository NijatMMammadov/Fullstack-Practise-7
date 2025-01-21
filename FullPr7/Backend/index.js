import express from "express"
const app = express()
import cors from "cors"
import { config } from "dotenv"

app.use(express.json())
app.use(cors())

config()
import "./config/config.js"

import { route } from "./routers/ProductRouter.js"
app.use("/products", route)

app.listen(3000, () => {
    console.log("3000 prtda din");
})