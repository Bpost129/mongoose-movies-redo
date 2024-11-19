import { Performer } from "../models/performer.js"

async function newPerformer(req, res) {
  try {
    const performers = await Performer.find({})
    res.render('performers/new', {
      title: 'Add Performer',
      performers: performers
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function create(req, res) {
  try {
    const performer = await Performer.create(req.body)
    res.redirect(`/performers/new`)
  } catch (error) {
    console.log(error)
    res.redirect('/performers/new')
  }
}

export {
  newPerformer as new,
  create
}