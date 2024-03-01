const fs = require('fs');
import('inquirer')
const textLength = require('inquirer-maxlength-input-prompt')
// inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// import select, { Separator } from '@inquirer/select';
//npm install @inquirer/select for select seperator option

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
    ]},
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





//max input prompt https://github.com/jwarby/inquirer-maxlength-input-prompt