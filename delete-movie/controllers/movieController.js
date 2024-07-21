const Movie = require('../models/movieModel');


const deleteMovie = async (req, res) => {
  try {
    const result = await Movie.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteMovie
};
