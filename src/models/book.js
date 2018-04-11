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

  const name = body.name
  let response = null

  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const book = new Book({name: "A", description: "descriptionnnn", authors: ["B","C"]})
    books.push(book)
    response = book
  }

  return response
}




module.exports = { getAll, create, show }
