import { Performer } from "../models/performer.js"

function newPerformer(req, res) {
  try {
    Performer.find({})
    .then(performers => {
      res.render('performers/new', {
        title: 'Add Performer',
        performers: performers
      })
    })
    .catch
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function create(req, res) {
  try {
    const performer = await Performer.create(req.body)
    res.redirect(`/`)
  } catch (error) {
    console.log(error)
    res.redirect('/performers/new')
  }
}

export {
  newPerformer as new,
  create
}