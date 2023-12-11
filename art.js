const express = require("express");
const path = require("path");
const {returnPaintings} = require("./dataProvider");
const {returnPaintingById} = require("./dataProvider");
const {returnPaintingByGallery} = require("./dataProvider");
const {returnPaintingByArtist} = require("./dataProvider");
const {returnPaintingByYear} = require("./dataProvider");

const app = express();
const port = 3000;

const staticFolderPath = path.join(__dirname, "static");
app.use("/static", express.static(staticFolderPath));

/*app.get("/", (req, res) => {
    res.sendFile(path.join(staticFolderPath, "tester.html"));
});*/

app.get("/", (req, res) => {
    const paintings = returnPaintings();
    res.json(paintings);
})

app.get("/:id", (req, res) => {
    const id = req.params.id;
    const painting = returnPaintingById(id);
    res.json(painting);
})

app.get("/gallery/:id", (req, res) => {
    const id = req.params.id;
    const paintings = returnPaintingByGallery(id);
    res.json(paintings);
})

app.get("/artist/:id", (req, res) => {
    const id = req.params.id;
    const paintings = returnPaintingByArtist(id);
    res.json(paintings);
})

app.get("/year/:min/:max", (req, res) => {
    const min = req.params.min;
    const max = req.params.max;
    const paintings = returnPaintingByYear(min, max);
    res.json(paintings);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});