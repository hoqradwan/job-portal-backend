const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

// routes
/* const managerRoute = require("./routes/manager.route");*/
const jobRoute = require("./routes/job.route"); 
// const userRoute = require("./routes/user.route");
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
/* app.use("/api/v1/manager", managerRoute);
app.use("/api/v1/jobs", candidateRoute); */
app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/user", userRoute);

module.exports = app;
