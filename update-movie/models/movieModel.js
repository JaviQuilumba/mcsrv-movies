const db = require('./db');

const Movie = {
  
  update: async (id, data) => {
    const { title, director, release_date, genre } = data;
    const query = `
      UPDATE movies_inf 
      SET title = $1, director = $2, release_date = $3, genre = $4
      WHERE id = $5 RETURNING *`;
    const values = [title, director, release_date, genre, id];
    return db.query(query, values);
  }
};

module.exports = Movie;
