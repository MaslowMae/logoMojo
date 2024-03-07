const fs = require('fs');
const { default: inquirer } = require('inquirer'); //trouble running inquirer so I switched to default/dynamic
const fetch = require('node-fetch');

class Shape {
    constructor(text, shape, color) {
        this.text = text;
        this.shape = shape;
        this.color = color;
        console.log('Shape');
    }
    generateSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="50%" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 letters, numbers or symbols for your logo',
        maxLength: 3,
        validate: function (input) {
            return input.length === 3 ? true : 'Input must be exactly 3 characters long.';
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'select a shape',
        choices: [
            'circle',
            'square',
            'triangle'
        ]
    },
    {
        type: 'list',
        name: 'color',
        message: 'select a color for the shape',
        choices: [
            'red',
            'green',
            'blue',
            'purple',
            'pink',
            'gray',
            'teal',
            'silver',
            'gold',
            'bronze'
        ]
    }
];

inquirer.prompt(questions)
    .then(answers => {
        const { text, shape, color } = answers;
        const logoMojo = new Shape(text, shape, color);
    fetch(`./lib/more/${shape}.svg`)
//   Fetch shape SVG based on user input
    .then(response => response.text())
    .then(svgData => {
        //combined user data to svg file
        const svgInput = logoMojo.generateSVG() + svgData;
        fs.writeFileSync('logo.svg', svgInput);
        console.log('LogoMojo Success!');
    })
        .catch(error => {console.log('inquirer error', error);
});
    })
//promise chained to pass inquire data to fetch shape.svg
//write to SVG file
