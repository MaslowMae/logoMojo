const fs = require('fs');
const inquirer = require('inquirer');
import('inquirer')
const textLength = require('inquirer-maxlength-input-prompt')
// inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// import select, { Separator } from '@inquirer/select';
//npm install @inquirer/select for select seperator option
//cli takes an object as a map for the arguments you wish to parse.
//Each property/key in the object is the long version of the argument i.e.

const questions = [
    {   
    type: 'maxlength-input',
    name: 'text',
    message: 'Please enter 3 letters, numbers or symbols for your logo',
    maxLength: 3
},   
{   
    type: 'list',
    name: 'shape',
    message: 'select a shape',
    choices: [
        'circle',
        'square', 
        'triangle'
    ]}
    //promise chained to pass inquire data to fetch shape.svg
    .then((res) => fetch(`./lib/more/shapes.js${res.Shape}`))
    // promises are chained to parse the request for the json data
    .then((res) => res.Shape.json())
     // json data is accepted as user and logged to the console
    .then((answerShape) => console.log(Shape))
,
{   
    type: 'maxlength-input',
    name: 'text',
    message: 'Please enter 3 letters, numbers or symbols for your logo',
    maxLength: 3
},





]

inquirer.prompt(questions) 
    .then(answers => {
    })

var text = function() {

}

// inquirer.prompt({
//     type: 'input'
//     name: ''
//     message: '',
// })



//max input prompt https://github.com/jwarby/inquirer-maxlength-input-prompt