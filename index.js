const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes.js'); //path to class file


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
        const { text, shape, color } = answers; // Destructure user answers

        let logoMojo;
        if(shape === 'circle') {
            logoMojo = new Circle (text,color);
        } else if (shape === 'square') {
            logoMojo = new Square (text, color);
        } else if (shape === 'triangle') {
            logoMojo = new Triangle (text, color);
        }
        const shapeSvgPath = `./lib/more/${shape.toLowerCase()}.svg`;
        if (!fs.existsSync(shapeSvgPath)) {
            throw new Error(`SVG File '${shapeSvgPath}' not found`);
        }
        const shapeSvg = fs.readFileSync(shapeSvgPath,'utf-8');

        //combined user data to svg file
        const svgInput = logoMojo.generateSVG(color, text, shapeSvg);
            fs.writeFileSync('logo.svg', svgInput);
            console.log('LogoMojo Success!');
    })
            .catch(error => {
                console.log('error creating svg:', error);
            });
