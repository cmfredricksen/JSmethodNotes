"use strict";

const strMethods = [];
const arrMethods = [];
const allMethods = [];
const names = [];
const syns = [];

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
const newMethod = function (name, str, arr, cb, syn) {
  allMethods.push({
    name: name,
    str: str,
    arr: arr,
    callBack: cb,
    syntax: syn,
  });
  names.push(name);
  syns.push(syn);
};

newMethod("pop", true, true, false, `arr.pop()`);
newMethod("filter", false, true, true, `arr.filter(function(){})`);
newMethod("reduce", false, true, true, `arr.reduce()`);
newMethod("slice", true, true, false, `arr.slice(2, 4)`);
newMethod("forEach", false, true, true, `arr.forEach(item) => )`);
newMethod("sort", true, true, true, `arr.sort((a, b) => a - b))`);
newMethod("map", false, true, true, `arr.map(function() => )`);

// To make method links
names.forEach((name) => {
  const html = `${name}`;
  const htmlLink = `#${name}`;

  name = document.createElement("a");
  name.setAttribute("rel", "stylesheet");
  name.setAttribute("type", "text/css");
  name.setAttribute("href", htmlLink);
  name.setAttribute("id", html);
  name.classList.add("link__style");
  name.textContent = html;
  console.log(name);
  uList.appendChild(name);
});

uList.addEventListener("click", function (e) {
  console.log(e.target);
  // sampleTitle.textContent = "Method Summary";
  sampleTitle.textContent = `.${e.target.id}()`;
  syntax.textContent = `arr.${e.target.id}()`;
});

console.log(syns);
console.log(uList);

// code sample box random array
function randomArr() {
  return Math.floor(Math.random() * 2);
}
const arrStr = `const arrStr = ['a', 'b', 'c', 'd']`;
const arrNum = `const arrNum = [1, 2, 3, 4]`;
const rando = randomArr() === 1 ? arrStr : arrNum;

const sampleCodeGen = function () {};

// code sample box display
sampleTitle.textContent = "method()";
sampleCode.textContent = `${rando}`;
syntax.textContent = `arr.method()`;
sampleFacts.textContent = "This method can be used on arrays.";
