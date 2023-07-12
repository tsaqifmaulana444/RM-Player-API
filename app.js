const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv/config")

const app = express()

// middleware
app.use(bodyParser.json())
app.use(cors())

// routes
const playersRoutes = require("./routes/players")
app.use("/player", playersRoutes)

// run app & connect to mongodb
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB Connected")
    app.listen(8000, () => console.log("Server Running At Port 8000"))
  })
  .catch((e) => {
    console.log(e)
  })
