const Movie = require('../models/movieModel');



const getMovies = async (req, res) => {
  try {
    const result = await Movie.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const result = await Movie.getById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getMovies,
  getMovieById
};
