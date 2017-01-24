"use strict";
var DomElement = (function () {
    function DomElement(type) {
        this.type = type;
        this.children = [];
    }
    DomElement.prototype.addText = function (text) {
        this.children.push(new DomElement(text));
    };
    DomElement.prototype.addElement = function (other) {
        this.children.push(other);
    };
    DomElement.prototype.print = function () {
        var openTag = (this.children.length == 0) ? this.type : "<" + this.type + ">";
        var closingTag = (this.children.length == 0) ? "" : "</" + this.type + ">";
        console.log(openTag);
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].print();
        }
        console.log(closingTag);
    };
    return DomElement;
}());
exports.DomElement = DomElement;
