import { Movie } from "../models/movie.js"

function newMovie(req, res) {
  res.render('movies/new', {
    title: 'Add Movie'
  })
}

async function create(req, res) {
  try {
    req.body.nowShowing = !!req.body.nowShowing
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const movie = await Movie.create(req.body)
    res.redirect(`/movies`)
  } catch (error) {
    console.log(error)
    res.redirect('/movies/new')
  }
}

async function index(req, res) {
  try {
    const movies = await Movie.find({})
    res.render('movies/index', {
      title: 'All Movies',
      movies
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function show(req, res) {
  try {
    const movie = await Movie.findById(req.params.movieId)
    res.render('movies/show', {
      movie,
      title: 'Movie Detail'
    })
  } catch (error) {
    console.log(error)
    res.redirect('/movies')
  }
}

async function deleteMovie(req, res) {
  try {
    await Movie.findByIdAndDelete(req.params.movieId)
    res.redirect('/movies')
  } catch (error) {
    console.log(error)
    res.redirect('/movies')
  }
}

async function createReview(req, res) {
  try {
    await Movie.findById(req.params.movieId)
    .then(movie => {
      movie.reviews.push(req.body)
      movie.save()
      .then(() => {
        res.redirect(`/movies/${movie._id}`)
      })
    })
  } catch (error) {
    console.log(error)
    res.redirect('/movies')
  }
}

async function deleteReview(req, res) {
  try {
    const movie = await Movie.findById(req.params.movieId)
    .then(movie => {
      movie.reviews.remove(req.params.reviewId)
      movie.save()
      .then(() => {
        res.redirect(`/movies/${movie._id}`)
      })
    })
  } catch (error) {
    console.log(error)
    res.redirect('/movies')
  }
}

export {
  newMovie as new,
  create,
  index,
  show,
  deleteMovie as delete,
  createReview,
  deleteReview,

}