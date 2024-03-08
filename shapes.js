//exports the 'triangle', 'circle', and 'square' classes

const fs = require('fs');
const inquirer = require('inquirer');
const text='';
const color='';

class Shape {
    constructor(text, shape, color) {
        this.text= text;
        this.shape= shape;
        this.color= color;
    }
    generateSVG(color, text, shapeSvg) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="50%" text-anchor="middle" fill="white">${text}</text>
            ${shapeSvg}
        </svg>`;
    }
}
    //define the class extenders using class example in general slack
    class Circle extends Shape {
        constructor(text, color) {
            super(text, 'circle', color);
        }
    }
    class Square extends Shape {
        constructor(text, color) {
            super(text, 'square', color);
        }
    }
    
    class Triangle extends Shape {
        constructor(text, color) {
            super(text, 'triangle', color);
        }
    }


    //export triangle, circle, and square classes
    module.exports = { Circle, Square, Triangle};

