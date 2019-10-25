// author

// books

//m * n

// given a author id return all book ids.

a = [{ book_id: 1, author_ids: [1,2,3]},
  { book_id: 2, author_ids: [ 1, 2 ]},
  { book_id: 3, author_ids: [ 1 ] }
]

function booksByAuthor(a, author_id) {
  let map = new Map()

  a.forEach(ele => {
    let authors = ele.author_ids;

    map = addToMap(authors, ele, map)
  })

  return map.get(author_id)
}

const addToMap = (authors, ele, map) => {
  authors.forEach(author => {
    if (map.has(author)) {
      console.log('here')
      let book_ids = map.get(author)
      book_ids.push(ele.book_id)
      map.set(author, book_ids)
    } else {
      map.set(author, [ele.book_id])
    }
  })
  return map;
}

console.log(booksByAuthor(a, 1))

