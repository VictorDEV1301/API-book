async function request(search) {
  const apiKey = 'AIzaSyDEUh9NfcUmjB-0U8byh1v7EWawDZOJkbg';
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`;
  return await (await fetch(URL)).json();
}

const searchBook = document.querySelector('#searchBook');
searchBook.addEventListener('keypress', async e => {
  if (e.key === 'Enter') {
    createBook(await request(searchBook.value));
  }
})

const main = document.querySelector('main');
function createBook(book) {
  console.log(book);
  main.innerHTML = '';

  const bookImage = createElement('img','src', book.items[0].volumeInfo.imageLinks.thumbnail);

  const titulo = createElement('h1','class','headerText');
  titulo.innerHTML = book.items[0].volumeInfo.title
  const paragrafo = createElement('p','class','descricao');
  paragrafo.innerHTML = book.items[0].volumeInfo.description;

  main.appendChild(bookImage);
  main.appendChild(titulo);
  main.appendChild(paragrafo);
}

function createElement(elemento, atributo, valor){
  const el = document.createElement(elemento)
  el.setAttribute(atributo, valor);
  return el;
}