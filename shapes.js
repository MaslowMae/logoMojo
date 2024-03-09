//exports the 'triangle', 'circle', and 'square' classes

const fs = require('fs');
const inquirer = require('inquirer');

class Shape {
    constructor(text, shape, color) {
        this.text= text;
        this.shape= shape;
        this.color= color;
    }
    //GPT help troubleshooting SVG issues
    generateSVG(color, text, shapeSvg) {
        let shapeMarkup;
        if (this.shape === 'circle') {
            shapeMarkup = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        } else if (this.shape === 'square') {
            shapeMarkup = `<rect width="200" height="200" x="10" y="10" rx="20" ry="20" fill="${this.color}"/>`;
        } else if (this.shape === 'triangle') {
            shapeMarkup = `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`;
        }
    
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeMarkup}    
        <text x="50%" y="50%" text-anchor="middle" fill="white">${text}</text>
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

