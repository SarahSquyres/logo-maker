const { prompt } = require('inquirer');
const validateColor = require("validate-color").default;
const { Circle, Square, Triangle } = require('./lib/shapes');
const { writeFileSync } = require('fs');


function init() {
    // Class constructor named Svg, initializes text and shape properties to empty strings.
    // Render method inserts the shape and text properties of the object into svg element
    class Svg {
        constructor() {
            this.text = '';
            this.shape = '';
        }
        render() {

            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
        }
        setText(text, textColor) {
            this.text = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`
        }
        setShape(shape) {
            this.shape = shape.render();

        }

    };

    // Prompt objects used to collect user input
    prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for logo:',
            validate: (text) => {
                if (text.length > 3) {
                    return 'Response should be no greater than 3 characters'
                } else if (text == '') {
                    return 'Error: Empty input'
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
            name: 'logoShape',
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
                } else if (shapeColor && shapeColor !== '' && validateColor(shapeColor)) {
                    return true;
                }
                return 'Error: Invalid color';
            }
        },
    ])
    // .then executes after the prompt method, takes the user input as an argument
        .then(({ text, textColor, logoShape, shapeColor }) => {
            let shape;
            switch (logoShape) {
                case 'Circle':
                    shape = new Circle();
                    shape.setShapeColor(shapeColor);
                    break;

                case 'Square':
                    shape = new Square();
                    shape.setShapeColor(shapeColor);
                    break;

                default:
                    shape = new Triangle();
                    shape.setShapeColor(shapeColor);
                    break;
            }

            const svg = new Svg();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFileSync('logo.svg', svg.render());

        })

        .then(() => console.log('Successfully created logo.svg!'))
        .catch((err) => {
            console.log(err);
            console.log('Unknown error!');
        });
}







init()