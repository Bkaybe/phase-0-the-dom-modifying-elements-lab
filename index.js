// Write your code here!
const element = document.querySelector("main");

document.body.removeChild(element);

const newHeader = document.createElement("h1"); // creating the element or tag

newHeader.textContent = "Bethuel is the champion"; // saying what should be in the tag or element
newHeader.id = "victory"; //assigning the element an id

document.body.append(newHeader); //specifiying where the element should be in the html
