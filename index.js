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
        type: 'input',
        name: 'color',
        message: 'Enter a color for the shape (keyword, hexadecimal, or RGB):',
        validate: function(input) {
            // Check if the input is a valid color keyword, hexadecimal, or RGB color
            if (/^#[0-9A-F]{6}$/i.test(input) || /^(red|green|blue|purple|pink|gray|teal|silver|gold|bronze)$/i.test(input) || /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(input)) {
                return true;
            } else {
                return 'Please enter a valid color keyword, hexadecimal, or RGB color (e.g., #RRGGBB, rgb(255, 0, 0))';
            }
        }}];

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
            console.log('Generated logo.svg')
    })
            .catch(error => {
                console.log('error creating svg:', error);
            });
