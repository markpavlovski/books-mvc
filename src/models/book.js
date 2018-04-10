const uuid = require('uuid/v4')
const books = []

function getAll (limit) {
  return limit ? books.slice(0, limit) : books
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const book = { id: uuid(), name }
    books.push(book)
    response = book
  }

  return response
}

function show (limit, id) {
  console.log(id)
  console.log(books);
  return books.find(el => el.id === id)
}


module.exports = { getAll, create, show }
