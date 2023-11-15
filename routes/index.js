var express = require("express");
var router = express.Router();

router.get("/movies", (req, res) => {
  fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      accept: "application/json",
      Authorization: process.env.TOKEN_TMDB,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      res.json({ movies: response.results });
    })
    .catch((err) => {
      res.json({ result: false, msg: err });
    });
});

module.exports = router;
