const {prompt} = require('inquirer');
const { writeFile } = require('fs/promises');


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
                return 'Please select a color'
            }
            return true;
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
                return 'Please select a color'
            }
            return true;
        }
    },
])
.then(answers => {
    console.log(answers)
})
}

init()