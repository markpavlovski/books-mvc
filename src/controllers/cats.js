const model = require('../models/cat')

function getAll (req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new cat`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

function show (req, res, next) {
  const limit = req.query.limit
  const id = req.params.id
  const data = model.show(limit,id)
  res.status(200).json({ data })
}



module.exports = { getAll, create, show }
