const {prompt} = require('inquirer');
// const { writeFile } = require('fs/promises');
// const (Circle, Square, Triangle) = require('./lib/shapes');
// const SVG = require('./lib/SVG');
const validateColor = require("validate-color").default;

function init(){
prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three letters for logo:',
        validate: (text) => {
            if (text.length > 3) {
                return 'Response should be no greater than 3 characters'
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose a color for your text (response may be a hexadecimal number):',
        validate: (textColor) => {
            if (textColor == '') {
                return 'Error: Empty input'
            } else if (textColor && textColor !== '' && validateColor(textColor)) {
                return true;
              } 
              return 'Error: Invalid color';
        }
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose a color for your shape (response may be a hexadecimal number):',
        validate: (shapeColor) => {
            if (shapeColor == '') {
                return 'Error: Empty input'
            }else if (shapeColor && shapeColor !== '' && validateColor(shapeColor)) {
                return true;
              } 
              return 'Error: Invalid color';
        }
    },
])
.then(answers => {
    console.log(answers)
})
}

init()