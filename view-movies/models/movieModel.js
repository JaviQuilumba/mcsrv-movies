const db = require('./db');

const Movie = {
  
  getAll: async () => {
    const query = 'SELECT * FROM movies_inf';
    return db.query(query);
  },
  getById: async (id) => {
    const query = 'SELECT * FROM movies_inf WHERE id = $1';
    const values = [id];
    return db.query(query, values);
  }
};

module.exports = Movie;
