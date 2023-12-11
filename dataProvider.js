const path = require("path");
const fs = require("fs");

const jsonPath = path.join(__dirname, "paintings.json");
const jsonData = fs.readFileSync(jsonPath);
const paintings = JSON.parse(jsonData);

function returnPaintings() {
    return paintings;
}

function returnPaintingById(id) {
    const found = paintings.find(p => p.paintingID == id);
    return found;
}

function returnPaintingByGallery(id) {
    const found = paintings.filter(p => p.gallery.galleryID == id);
    return found;
}

function returnPaintingByArtist(id) {
    const found = paintings.filter(p => p.artist.artistID == id);
    return found;
}

function returnPaintingByYear(min, max) {
    const found = paintings.filter(p => p.yearOfWork >= min && p.yearOfWork <= max);
    return found;
}

module.exports = {returnPaintings, returnPaintingById, returnPaintingByGallery, returnPaintingByArtist, returnPaintingByYear};