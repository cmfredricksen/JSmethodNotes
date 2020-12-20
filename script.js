"use strict";

const strMethods = [];
const arrMethods = [];
const allMethods = [];
const names = [];
const syns = [];
const infoStr = [];

// DOM Elements
const methodsList = document.querySelector(".methods__list");
const uList = document.querySelector("ul");
const methodInfo = document.querySelector(".methods__info");

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
  // console.log(name);
  uList.appendChild(name);
});

uList.addEventListener("click", function (e) {
  console.log(e.target);
  // sampleTitle.textContent = "Method Summary";
  sampleTitle.textContent = `.${e.target.id}()`;
  syntax.textContent = `arr.${e.target.id}()`;
  // sampleFacts.textContent = infoStr;
});

const disMethod = allMethods.forEach((method) => method.syntax);

console.log(syns, "syns");
console.log(uList, "ulist");

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
sampleFacts.textContent = "Methods can be used on strings and arrays.";

// Methods Info
allMethods.forEach((method) => {
  const infoDisplay = document.createElement("div");
  const infoTitle = document.createElement("h3");
  const info = document.createElement("p");
  infoDisplay.classList.add("info__display");
  infoTitle.classList.add("info__title");
  info.classList.add("info__text");

  infoTitle.textContent = method.name;
  info.textContent = `
  The ${method.name} method:
  used for arrays: ${method.arr}
  uses callback function: ${method.callBack}
  syntax: ${method.syntax}
  `;
  infoStr.push(info.textContent);

  methodInfo.appendChild(infoDisplay);
  infoDisplay.appendChild(infoTitle);
  infoDisplay.appendChild(info);
});

console.log(infoStr);
