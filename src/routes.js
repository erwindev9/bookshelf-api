const booksHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: booksHandler.addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: booksHandler.getAllBooksHandler,
  },
];

module.exports = routes;
