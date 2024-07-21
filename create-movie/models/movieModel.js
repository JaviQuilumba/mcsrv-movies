const db = require('./db');

const Movie = {
  create: async (data) => {
    const { title, director, release_date, genre } = data;
    const query = `
      INSERT INTO movies_inf (title, director, release_date, genre) 
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [title, director, release_date, genre];
    return db.query(query, values);
  }
};

module.exports = Movie;
