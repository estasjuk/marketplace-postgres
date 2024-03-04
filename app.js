require("dotenv").config();

const express = require("express");

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index', {
        heading: 'YarmarOK',
        text: 'Some text',
        time: (new Date().toUTCString())
    })
})

app.use(express.static("public"));
app.use(express.json());

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    console.log(err);
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;