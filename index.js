const express = require('express')
const coursesRouter = require("./routes/courses")
const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")

const app = express()

// using the middleware to get the url.
app.use(bodyParser.json())
app.use("/api/v1/courses", coursesRouter)

mongoose.connect(process.env.DB_CONNECTION_URL)


app.listen(process.env.PORT, () => {
    console.log('server is listening on port 2000')
})