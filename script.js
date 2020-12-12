"use strict";

const strMethods = [];
const arrMethods = [];
const allMethods = [];
const names = [];

const codeSamples = [
  `arr.pop()  // pops the last item off of the array`,
  `arr.filter(function() => )`,
  `arr.reduce(function())`,
  `arr..slice()`,
];

// DOM Elements
const methodsList = document.querySelector(".methods__list");
const uList = document.querySelector("ul");

// code sample
const sampleBox = document.querySelector(".sample__box");
const code = document.querySelector("code"); // code box
const sampleTitle = document.querySelector(".sample__title");
const sampleCode = document.querySelector(".sample__code");
const syntax = document.querySelector(".method__syntax");
const sampleFacts = document.querySelector(".sample__facts");

// Functions

// ****Add new method
const newMethod = function (name, str, arr, cb) {
  allMethods.push({ name: name, str: str, arr: arr, callBack: cb });
  names.push(name);
};

newMethod("pop", true, true, false);
newMethod("filter", false, true, true);
newMethod("reduce", false, true, true);
newMethod("slice", true, true, false);
newMethod("forEach", false, true, true);
newMethod("sort", true, true, true);
newMethod("map", false, true, true);

// To make method links
const linkMaker = (arr) => {
  arr.forEach((name) => {
    const html = `
       ${name}
    `;
    const htmlLink = `#${name}`;

    name = document.createElement("a");
    name.setAttribute("rel", "stylesheet");
    name.setAttribute("type", "text/css");
    name.setAttribute("href", htmlLink);
    name.classList.add("link__style");
    name.textContent = html;
    console.log(name);
    uList.appendChild(name);
  });
};

const linkNames = linkMaker(names);
console.log(linkNames);

// linkNames.forEach(lname => {
//   lname.addEvent
// });

// linkNames.addEventListener("click", function (e) {
// sampleTitle.textContent = "hello";
// });

// code sample box random array
function randomArr() {
  return Math.floor(Math.random() * 2);
}
const arrStr = `const arrStr = ['a', 'b', 'c', 'd']`;
const arrNum = `const arrNum = [1, 2, 3, 4]`;
const rando = randomArr() === 1 ? arrStr : arrNum;

const sampleCodeGen = function () {};

// code sample box display
sampleTitle.textContent = "Method Summary";
sampleCode.textContent = `${rando}`;
syntax.textContent = codeSamples[0];
sampleFacts.textContent = "This method can be used on arrays.";
