const db = require('./db');

const Movie = {
  delete: async (id) => {
    const query = 'DELETE FROM movies_inf WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Movie;
