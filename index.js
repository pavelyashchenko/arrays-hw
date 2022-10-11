const books = [
  {
    name: 'Властелин колец',
    author: 'Джон Р. Р. Толкин',
    genre: 'фэнтези',
    year: 1954
  },
  {
    name: 'Холодный дом',
    author: 'Чарльз Диккенс',
    genre: 'роман',
    year: 1853
  },
  {
    name: 'Тёмные начала',
    author: 'Филип Пулман',
    genre: 'фэнтези',
    year: 1995
  },
  {
    name: 'Автостопом по галактике',
    author: 'Дуглас Адамс',
    genre: 'комедия',
    year: 1979
  },
  {
    name: 'Гарри Поттер и Кубок огня',
    author: 'Дж. К. Роулинг',
    genre: 'фэнтези',
    year: 2000
  },
  {
    name: 'Посмертные записки Пиквикского клуба',
    author: 'Чарльз Диккенс',
    genre: 'роман',
    year: 1836
  },
  {
    name: 'Лев, колдунья и платяной шкаф',
    author: 'Клайв Стэйплз Льюис',
    genre: 'фэнтези',
    year: 1950
  },
  {
    name: 'Гордость и предубеждение',
    author: 'Джейн Остин',
    genre: 'роман',
    year: 1813
  },
  {
    name: 'Приключения Оливера Твиста',
    author: 'Чарльз Диккенс',
    genre: 'роман',
    year: 1837
  },
  {
    name: 'Унесённые ветром',
    author: 'Маргарет Митчелл',
    genre: 'роман',
    year: 1936
  }
]

const mostBooks = books.filter(item => {return item.genre === 'роман'}).map(item => {return item.name.toUpperCase()});
console.log(mostBooks);

const booksXX = books.filter(item => {return item.year < 1999}).map(item => {return item.name});
console.log(booksXX);

const booksXXI = books.filter(item => {return item.year >= 2000}).map(item => {return item.name});
console.log(booksXXI);