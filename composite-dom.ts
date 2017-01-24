import readlineSync = require('readline-sync');

interface IDomElement {
  print();
}

class DomElement implements IDomElement {

    private children: DomElement[];
    private type: string;

    constructor(type: string){
        this.type = type;
        this.children = [];
    }

    addText(text: string){
        this.children.push(new DomElement(text));
    }

    addElement(other:DomElement){
        this.children.push(other);
    }

    print(){
        var openTag = (this.children.length == 0) ? this.type : "<" + this.type + ">";
        var closingTag = (this.children.length == 0) ? "" : "</" + this.type + ">";
        console.log(openTag);
        for(var i = 0; i < this.children.length; i++){
            this.children[i].print();
        }
        console.log(closingTag);
    }
}
