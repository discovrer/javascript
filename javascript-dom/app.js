//Part-1 - Get Elements by class or tag
/*
var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(function(item){
  console.log(item);
});

*/

//Part-2 - Query Selector
/*
// const wrap = document.querySelector('#wrapper');
// console.log(wrap);

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

 var books = document.querySelector('#book-list li .name');
 console.log(books);
 books = document.querySelectorAll('#book-list li .name');
 console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
});
*/

//Part-3 - Changing text and HTML content
/*
var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
  //book.textContent = 'test';  //replace the text
  book.textContent += ' (book title)';  //append the text
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';  //replace the inner HTML content
bookList.innerHTML += '<p>This is how you add HTML</p>';  //append the inner HTML content
*/

//Part-4 - DOM Nodes
/*
const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is : '+banner.nodeType);
console.log('#page-banner node name is : '+banner.nodeName);
console.log('#page-banner has child nodes : '+banner.hasChildNodes());

// const clonedBanner = banner.cloneNode();  //cloneNode() accepts boolean as parameter and default value is false
// console.log(clonedBanner);

const clonedBanner = banner.cloneNode(true);  //On passing true as parameter the child nodes are cloned as well
console.log(clonedBanner);
*/

//Part-5 - Traversing the DOM
/*
const bookList = document.querySelector('#book-list');

console.log('the parent node is : '+bookList.parentNode);
console.log('the parent element is : '+bookList.parentElement);
console.log(bookList.childNodes); //also includes the line breaks
console.log(bookList.children); //shows only the child elements

console.log('book-list next sibling is : '+bookList.nextSibling);
console.log('book-list next element sibling is : '+bookList.nextElementSibling);
console.log('book-list previous sibling is : '+bookList.previousSibling);
console.log('book-list previous element sibling is : '+bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else';
*/

//Part-6 - DOM Events
/*
var btns =  document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(event){
    const li = event.target.parentElement;
    li.parentNode.removeChild(li);
  });
});

const link = document.querySelector('#page-banner p a');

link.addEventListener('click',function(event){
  event.preventDefault();
  console.log('Navigation to '+event.target.textContent+' was prevented.');
});
*/

//Part-7 - Event Bubbling
/*
const list = document.querySelector('#book-list ul');

//Like in previous example the event gets bubbled up the dom tree and fires
//event associated with parent Elements
//So, this is a better way of adding event listener
list.addEventListener('click',function(event){
  if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});
*/

//Part-8 - Interacting with forms
/*
//To search all the forms in a document use document.forms
const list = document.querySelector('#book-list ul');

//delete book
list.addEventListener('click',function(event){
  if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(event){
  event.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});
*/

//Part-9 - Creating elements and changing styles and classes
/*
//delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(event){
  if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(event){
  event.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  bookName.textContent = value;
  deleteBtn.textContent = 'Delete';

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
*/

//Part-10 - Attributes
//var elem = document.querySelector('#book-list');
//elem.getAttribute('class');
//elem.setAttribute('class', 'testClass');
//elem.hasAttribute('class');
//elem.removeAttribute('class');

//Part-11 - Checkboxes and change Events
/*
//delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(event){
  if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(event){
  event.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  bookName.textContent = value;
  deleteBtn.textContent = 'Delete';

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(event){
  if(hideBox.checked){
    list.style.display = 'none';
  }else {
    list.style.display = 'initial'; //block can also be used instead of initial
  }
});
*/

//Par-12 - Custom Search Filter
/*
//delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(event){
  if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(event){
  event.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  bookName.textContent = value;
  deleteBtn.textContent = 'Delete';

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(event){
  if(hideBox.checked){
    list.style.display = 'none';
  }else {
    list.style.display = 'initial'; //block can also be used instead of initial
  }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(event){
  const term = event.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    }else {
      book.style.display = 'none'; //block can also be used instead of initial
    }
  });
});
*/

//Part-13 - Tabbed content
/*
//delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(event){
  if(event.target.className == 'delete'){
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});

//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(event){
  event.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create element
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  bookName.textContent = value;
  deleteBtn.textContent = 'Delete';

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(event){
  if(hideBox.checked){
    list.style.display = 'none';
  }else {
    list.style.display = 'initial'; //block can also be used instead of initial
  }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(event){
  const term = event.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    }else {
      book.style.display = 'none'; //block can also be used instead of initial
    }
  });
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
*/

//Part-14 - DOMContentLoaded Event
//DOMContentLoaded fires when all the DOM content has been loaded
//The advantage of doing this is that now we can add our app.js file anywhere in the HTML file.
//If we not do this, then all the event listeners will not work as the DOM was not loaded when script ran(if script is in the head).
document.addEventListener('DOMContentLoaded',function(){
  //delete book
  const list = document.querySelector('#book-list ul');
  list.addEventListener('click',function(event){
    if(event.target.className == 'delete'){
      const li = event.target.parentElement;
      list.removeChild(li);
    }
  });

  //add book
  const addForm = document.forms['add-book'];
  addForm.addEventListener('submit',function(event){
    event.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    bookName.textContent = value;
    deleteBtn.textContent = 'Delete';

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  //hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change',function(event){
    if(hideBox.checked){
      list.style.display = 'none';
    }else {
      list.style.display = 'initial'; //block can also be used instead of initial
    }
  });

  //filter books
  const searchBar = document.forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup',function(event){
    const term = event.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(function(book){
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) != -1){
        book.style.display = 'block';
      }else {
        book.style.display = 'none'; //block can also be used instead of initial
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });
});
