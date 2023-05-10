const books = require('./books');

const filterName = (name) => {
  const shortenedBook = [];
  const filteredBooks = books.filter((item) => {
    // Sanitasi
    const findName = name.toLowerCase();
    const matchName = item.name.toLowerCase();

    // Filter
    const hasil = matchName.includes(findName);
    return hasil;
  });

  filteredBooks.forEach((item) => {
    const book = {
      id: item.id,
      name: item.name,
      publisher: item.publisher,
    };
    shortenedBook.push(book);
  });

  return shortenedBook;
};

const filterReading = (reading) => {
  const shortenedBook = [];
  const filteredBooks = books.filter((item) => {
    if (reading === '1') {
      return item.reading === true;
    }
    if (reading === '0') {
      return item.reading === false;
    }
    return true;
  });

  filteredBooks.forEach((item) => {
    const book = {
      id: item.id,
      name: item.name,
      publisher: item.publisher,
    };
    shortenedBook.push(book);
  });

  return shortenedBook;
};

const filterFinished = (finished) => {
  const shortenedBook = [];
  const filteredBooks = books.filter((item) => {
    if (finished === '1') {
      return item.finished === true;
    }
    if (finished === '0') {
      return item.finished === false;
    }
    return true;
  });

  filteredBooks.forEach((item) => {
    const book = {
      id: item.id,
      name: item.name,
      publisher: item.publisher,
    };
    shortenedBook.push(book);
  });

  return shortenedBook;
};

module.exports = { filterName, filterReading, filterFinished };
