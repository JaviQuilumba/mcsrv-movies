const Movie = require('../models/movieModel');

const createMovie = async (req, res) => {
  try {
    const result = await Movie.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createMovie
};
