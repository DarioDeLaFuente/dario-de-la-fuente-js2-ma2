import { books } from "../js/books.js";

let booksitems = books;

let listElem = document.getElementById("myList");
let listHTML = "";

for (let i = 0; i < booksitems.length; i++) {
  listHTML += `<div class="container">
    <div class="box">
      <p>isbn: ${booksitems[i].isbn}</p>
      <p>title: ${booksitems[i].title}</p>
      <button class="button" id="remove-button-${i}" onclick="removeItemsFromArray(${i})">Remove</button>
    </div>
    </div>`;
}
listElem.innerHTML = listHTML;

window.removeItemsFromArray = function (items) {
  booksitems.splice(items, 1);
  if (booksitems.length === 0) {
    var container = document.getElementById("myList");
    container.innerHTML = `
    <div class="container">
     <p>There are no items in the list</p>
    </div>
    <a class="button" href="/">Reload</a>`;
    return;
  }
  listElem.innerHTML = "";
  listHTML = "";

  for (let i = 0; i < booksitems.length; i++) {
    listHTML += `<div class="container">
    <div class="box">
      <p>isbn: ${booksitems[i].isbn}</p>
      <p>title: ${booksitems[i].title}</p>
      <button class="button" id="remove-button-${i}" onclick="removeItemsFromArray(${i})">Remove</button>
    </div>
    </div>`;
  }
  listElem.innerHTML = listHTML;
};
