const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - director
 *         - release_date
 *         - genre
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of the movie
 *         director:
 *           type: string
 *           description: The director of the movie
 *         release_date:
 *           type: string
 *           format: date
 *           description: The release date of the movie
 *         genre:
 *           type: string
 *           description: The genre of the movie
 *       example:
 *         id: 1
 *         title: Inception
 *         director: Christopher Nolan
 *         release_date: 2010-07-16
 *         genre: Science Fiction
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The movies managing API
 */


/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Returns the list of all the movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Some server error
 */
router.get('/movies', movieController.getMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 *       500:
 *         description: Some server error
 */
router.get('/movies/:id', movieController.getMovieById);


module.exports = router;
