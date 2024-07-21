const Movie = require('../models/movieModel');

const updateMovie = async (req, res) => {
  try {
    const result = await Movie.update(req.params.id, req.body);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  updateMovie
};
