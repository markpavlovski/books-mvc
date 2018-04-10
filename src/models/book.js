const uuid = require('uuid/v4')
const books = []


class Book {
  constructor({name,description,authors}){
    this.name = name
    this.desription = description
    this.authors = authors
    this.id = uuid()
    this.borrowed = false
  }
}

let getAll = () => books
let show = (id) => books.find(el => el.id === id)
let create = (body) => {
  console.log(body);
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




module.exports = { getAll, create, show }
