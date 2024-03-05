//exports the 'triangle', 'circle', and 'square' classes
class Shape {
    constructor(name, width, height ) {
    this.name = name;
    this.width = 300;
    this.height = 200;
    console.log('Shape');
    }
}

Shape.call(this, name, width, height);

const shapeOne = new Shape('circle','width', 'height'); 
const shapeTwo = new Shape('square','width', 'height');
const shapeThree = new Shape('triangle','width', 'height');
    //   export logo.svg 