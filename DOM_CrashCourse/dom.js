// Examine the document object
// console.dir(document);
console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// Actually change something
document.title = "Document Object Model";


// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[12]);

console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// Get element by ID
console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
headerTitle.textContent = "Something new";
// var header = document.getElementById("main-header");


// headerTitle.textContent = 'New Lister';
headerTitle.innerText = 'Back to the old, overwrite..';
// console.log(headerTitle.textContent);
console.log(headerTitle.innerText);    //innerText pays attention to styling (display: none)
headerTitle.innerHTML = '<h3>Back to the old, overwrite...</h3>'; //Puts it inside the h1 tag
headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = "solid 3px #000";

// Get element by classname now
var items = document.getElementsByClassName('list-group-item');

console.log(items[1]);
items[1].textContent = 'The Second One';
items[1].textContent = "Item 2";


// items.style.backgroundColor = 'f4f4f4';   
// Cannot set property error

for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'black';
    items[i].style.color = 'white';
};

// Get element by tagname
var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "The Second One";
// li[1].textContent = "Back to Item 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = 'f4f4f4';   Cannot set property error

for(var i = 0; i < li.length; i++) {
    li[i].style.borderTop = '1px solid white';
};

// Queryselectors (grabs the first one)
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #aaa';

// var input = document.querySelector('input');
// console.log(input.value);

var submit = document.querySelector('input[type="submit"]');
submit.value="Post that Shit";

// var item = document.querySelector(".list-group-item");
// item.style.color = 'yellow';

// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = "coral";

// Quereselector all
var titles = document.querySelectorAll('.title')  
// console.log(titles);

titles[0].textContent = 'Now add some, Fool!';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll("li:nth-child(even)");

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'black';
};
for(var i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = 'orange';
};

// Now getting to the second video. Traversing the DOM
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); Also gets the white space, kind of a pain in the ass!


// console.log(itemList.children);
// console.log(itemList.children[3]);
// itemList.children[1].textContent = 'Second Item';

// firstChild. Also gets the white space, linebreaks etc...
// console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'First Element Child';

// lastElementChild
// console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Last Element Child";

// nextSibling
// console.log(itemList.nextSibling);
// itemList.nextSibling.textContent = "Nex Sibling";

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling and previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'List of Items';

// createElements

// create a div
var newDiv = document.createElement('div');

// add classname
newDiv.className = 'newlyCreated';
// add ID
newDiv.id = 'showID';

// add attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Insert div with Javascript');

// add text to div
newDiv.appendChild(newDivText);
// console.log(newDivText)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


var button = document.getElementById('button').addEventListener('click', buttonClick())

function buttonClick() {
console.log('Some body called a function!');
// document.getElementById('header-title').textContent = 'You Changed the Title';
document.querySelector('#main').style.backgroundColor = 'lightblue';
};



var box = document.getElementById('box');


box.addEventListener('mousemove', runEvent);

function runEvent(e) {
    // console.log("EVENT TYPE: " + e.type);
    output.innerHTML = "<h4>MouseX: " + e.offsetX + "</h4><h4>MouseY: " + e.offsetY + "</h4>";
    document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
};













































