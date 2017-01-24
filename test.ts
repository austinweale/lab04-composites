import *  as module from "./composite-dom";

let dom: module.DomElement = new module.DomElement("html");
let div1: module.DomElement = new module.DomElement("div");
let div2: module.DomElement = new module.DomElement("div");
let p1: module.DomElement = new module.DomElement("p");
let p2: module.DomElement = new module.DomElement("p");
p1.addText("Hi, I am a TextNode being printed!");
p2.addText("TextNode == leaf");
div1.addElement(p1);
div2.addElement(p2);
dom.addElement(div1);
dom.addElement(div2);


dom.print();

