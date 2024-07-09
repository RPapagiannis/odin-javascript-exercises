let books = [
    {title: 'Book', author: 'Name'},
    {title: 'Book2', author: 'Name2'}
]

let results = books.map(book => book.title);

console.table(results);