/* ------- DOM ------- */

/*
 Disover the document itself
    - document.title
    - document.head
    - document.body
 */

/* ------- ACCESSING A DOM ------- */

// getElementById - grab dom elements by using Id.
// return an element
const containerById = document.getElementById("container");
// console.log("containerById", containerById);
console.log(containerById);
console.log(containerById.attributes); // works fine

// getElementByClassName - grab dom elements by using class name.
// returns HTMLCollection
const containerByClassName = document.getElementsByClassName("container");
const children = document.getElementsByClassName("child");
console.log(containerByClassName);
console.log(containerByClassName.attributes); // undefined
console.log(children);
console.log(children[0]); // works fine
console.log(children.item(0)); // works fine -> built-in method of HTMLCollection

console.log("====");
for (let i = 0; i < children.length; i++) {
  console.log(children.item(i));
}

// getElementByTagName - grab dom elements by using tag name.
// returns HTMLCollection

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

console.log(paragraphs[0]); // works fine
console.log(paragraphs.item(0)); // works fine -> built-in method of HTMLCollection

console.log("====");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs.item(i));
}

// querySelector - universal method
// returns an element

const h1 = document.querySelector("h1"); // use tag name
console.log(h1);

const container2 = document.querySelector(".container"); // use class
console.log(container2);

const container3 = document.querySelector("#container"); // use Id
console.log(container3);

const child1 = document.querySelector(".container p"); // first element
console.log(child1);

// querySelectorAll - universal method
// returns NodeList

const children2 = document.querySelectorAll(".container p"); // 3 children
const children3 = document.querySelectorAll("p"); // 4 children
console.log(children2); // array like NodeList
console.log(children3);

const arrayOfChildren2 = Array.from(children2);
console.log(arrayOfChildren2); // real array

children2.forEach((el) => console.log(el));
console.log(children2.entries()); // {}
console.log(children2.values()); // {}
console.log(children2.keys()); // {}

for (const entry of children2.entries()) {
  console.log(entry); // [key, value]
}

for (const value of children2.values()) {
  console.log(value); // value
}

for (const key of children2.keys()) {
  console.log(key); // key
}

/* -------  TRAVERSE A DOM - RELATIONSHIPS ------- */
/*
    Any whitespace will create a #text node, from a single space to multiple spaces, returns, tabs, and so on.
*/
const img1 = document.getElementById("img1");
// console.log(img1);

const section = document.getElementsByTagName("section")[0];
// console.log(section);

// parentNode
const parentNodeOfImg1 = img1.parentNode;
console.log(parentNodeOfImg1); // element section with class name of images

// parentElement
const parentElementOfImg1 = img1.parentElement;
console.log(parentElementOfImg1); // element section with class name of images

// childNodes
const childNodesOfSection = section.childNodes;
console.log(childNodesOfSection); // NodeList with length of 7

// children - only grabs element nodes
const childrenOfSection = section.children;
console.log(childrenOfSection); // HTMLCollection with length of 3

// firstChild && lastChild
const firstChild = section.firstChild;
const lastChild = section.lastChild;
console.log(firstChild); // text
console.log(lastChild); // text

// firstElementChild && lastElementChild
const firstElementChild = section.firstElementChild;
const lastElementChild = section.lastElementChild;
console.log(firstElementChild); // img1 element
console.log(lastElementChild); // img3 element

// previousSibling && nextSibling
console.log(img1.previousSibling); // text
console.log(img1.nextSibling); // text

// previousElementSibling && nextElementSibling
console.log(img1.previousElementSibling); // null
console.log(img1.nextElementSibling); // img2 element

// getElementById('img3')
// getElementById('img1').nextElementSibling.nextElementSibling // img3 element

/* -------  CHANGING DOM NODES ------- */

// Change by using attribute name itself
const img3 = document.getElementById("img3");
img3.src =
  "https://www.travelandleisure.com/thmb/O_l4b5JDWtEWKQ7mE7PoA3rQdVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cascade-mountains-range-USMNTNS0720-db9bdf21ee2e47b1868232c551c01006.jpg";

console.log(img3.src);

// getAttribute && setAttribute
const img3Src = img3.getAttribute("src");
console.log(img3Src);

img3.setAttribute("alt", "last mountain");
console.log(img3);

/* -------  STYLING------- */

const bodyEl = document.querySelector("body");
const bodyStyles = bodyEl.style;

// update body background color and color
bodyEl.style.background = "burlywood";
bodyEl.style.color = "purple";

console.log(bodyStyles);
console.log(bodyStyles.background); // burlywood
console.log(bodyStyles.color); // purple

const images = document.querySelectorAll(".mountain");

images.forEach((mountain) => {
  console.log(mountain.x);
  console.log(mountain.y);
  mountain.style.borderWidth = "8px";
  mountain.style.borderStyle = "solid";
  mountain.style.borderColor = "black";
  //   mountain.style.border = "6px solid black"; // shortcut
  mountain.style.height = "200px";
  mountain.style.width = "200px";
});

// className and classList
const article = document.querySelector("article");
console.log(article.className); // blog blogs => string
console.log(article.classList); // DOMTokenList ["blog", "blogs"],  value: "blog blogs"

// append
// article.className = 'allblogs'; // wrong, it overrides
console.log(article);
article.className += " allblogs"; // wrong, it overrides
console.log(article);

article.classList.add("natureBlogs");
console.log(article);

// remove
// className => a lot of work
article.classList.remove("blogs");
console.log(article);

const isVisible = true; // change it false to see an effect
article.classList.toggle("visible", isVisible);
console.log(article);

// contains
console.log(article.classList.contains("blog"));

// innerHTML

console.log(article.innerHTML); // get the content of article
// article.innerHTML = "Some text"; // set the content for the article
// article.innerHTML = "<p>Some text</p>"; // set html code inside article

// string literal
const text = "This is a text";
article.innerHTML = `<p>${text}</p>`;
article.innerHTML += "<span>This appended text</span>"; // append via innerHTML

// textContent vs innerText vs innerHTML
console.log(article.innerHTML); // <p>This is a text</p><span>This appended text</span>
console.log(article.textContent); // This is a textThis appended text
console.log(article.innerText);
/*
This is a text

This appended text
*/

/* -------  CREATE AN ELEMENT------- */

// createElement

const divEl = document.createElement("div");
const textNode = document.createTextNode("This text is coming from javascript");

/*
divEl.textContent = textNode; // not working
divEl.innerText = textNode; // not working
divEl.innerHTML = textNode; // not working
*/

// divEl.appendChild("Hello world"); // error => text is not a node
// divEl.appendChild(textNode); // working fine

// divEl.append("Hello world"); // working fine
divEl.append(textNode); // working fine

console.log(divEl); // <div></div>
console.log(textNode); // "This text is coming from javascript"

const node = divEl.append(textNode);
console.log(node); // undefined

const node2 = divEl.appendChild(textNode);
console.log("node2", node2); // This text is coming from javascript

// append my newly created element to body
// we created bodyEl on top of the file
divEl.style.color = "#000";
divEl.style.padding = "20px 0";
divEl.style.fontSize = "20px";

bodyEl.append(divEl);

// without createTextNode
const footer = document.createElement("footer");
footer.innerHTML = `<p>This is footer</p>`;
footer.style.borderTop = "2px solid";

bodyEl.append(footer);

/* -------  EVENT HANDLERS ------- */

const myInput = document.querySelector(".customerName");
const myBtn = document.querySelector(".btn");
const myBtn2 = document.querySelector(".btn2");

// give click event to button

// const listenClick = (event) => {
//   event.preventDefault();
//   console.log("button clicked!");
// };
// myBtn.addEventListener("click", listenClick);
// myBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("button clicked!");
// });

// myBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("button clicked!");
// });

// give event to input

// waits for user to finish typing
// myInput.addEventListener("change", () => {
//   console.log("input updating");
// });

// doesn't wait
// myInput.addEventListener("input", () => {
//   console.log("input updating");
// });

// myInput.addEventListener("input", (event) => {
//   //   console.log(event);
//   //   console.log(event.target);
//   console.log(event.target.value);
// });

// ------------------------
// Too see an effect: click submit more than 2 times
// Then click 1 time cancel button
// Lastly click submit button again and see event is not working

let toggle = false;

function focusListener(event) {
  event.preventDefault();
  bodyEl.style.background = toggle ? "lightgray" : "lightgreen";

  toggle = !toggle;
}

myBtn.addEventListener("click", focusListener, false);

// removeEventListener
myBtn2.addEventListener("click", (event) => {
  event.preventDefault();
  myBtn.removeEventListener("click", focusListener, false);
});

// mouseover body
// bodyEl.addEventListener("mouseover", (event) => {
//   console.log(window.scrollX, window.scrollY);
// });
