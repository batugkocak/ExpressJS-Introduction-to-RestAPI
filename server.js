const express = require("express");
const app = express();

// Route Imports
const feedRoutes = require("./routes/feed");

app.use("/feed", feedRoutes);

app.listen(8080);
