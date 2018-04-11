const model = require('../models/book')

function getAll (req, res, next) {
  const data = model.getAll()
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new book`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

function show (req, res, next) {
  const id = req.params.id
  const data = model.show(id)
  //
  // if (data) {
  //   return next({ status: 400, message: `book does not exist`, errors: data.errors })
  // }

  res.status(200).json({ data })
}

function modify (req, res, next) {
  const id = req.params.id
  const data = model.modify(id, req.body)
  //
  // if (data) {
  //   return next({ status: 400, message: `Could not update the book`, errors: data.errors })
  // }
  res.status(200).json({ data })
}

function remove (req, res, next) {
  const id = req.params.id
  const data = model.remove(id)
  res.status(200).json({ data })
}



module.exports = { getAll, create, show, modify, remove }
