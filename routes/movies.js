import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

// GET /movies
router.get('/', moviesCtrl.index)

// GET /movies/new
router.get('/new', moviesCtrl.new)

// GET /movies/:movieId
router.get('/:movieId', moviesCtrl.show)

// POST /movies
router.post('/', moviesCtrl.create)

// POST /movies/:movieId/reviews
router.post('/:movieId/reviews', moviesCtrl.createReview)

// DELETE /movies/:movieId
router.delete('/:movieId', moviesCtrl.delete)

// DELETE /movies/:movieId/reviews/:reviewId
router.delete('/:movieId/reviews/:reviewId', moviesCtrl.deleteReview)

export { router }