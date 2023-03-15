// Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const filterAndCapitalize = books => books
  .filter(({ year }) => year >= 2010)
  .map(({ title, author, year }) => ({ title, author: author.toUpperCase(), year}));

const books = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 20011 },
  { title: 'Divergent', author: 'Veronica Roth', year: 2011 },
  { title: 'The Fault in Our Stars', author: 'John Green', year: 2012 }
];

const filteredAndCapitalized = filterAndCapitalize(books);
console.log(filteredAndCapitalized);