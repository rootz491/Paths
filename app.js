const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const csrf = require("csurf");
require("dotenv").config();

const apiRoutes = require("./routes/api.routes");
const pagesRoutes = require("./routes/pages.routes");

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connected to database successfully"));

app.set('views engine', 'ejs');
app.use('public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(csrf());
app.use(logger("dev"));

app.use("/api", apiRoutes);
app.use(pagesRoutes);

/*
 *  handle 404 
app.use('*', (_, res) => res.status(404).render('/path/to/404.ejs'));
*/

app.listen(process.env.PORT, _ => {
    console.log("server is running on port " + process.env.PORT)
})