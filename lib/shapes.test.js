const { Circle, Square, Triangle } = require('../lib/shapes');

  

  describe('Circle Test', () => {
    test('Should display a green circle', () => {
      const shape = new Circle();
      shape.setShapeColor('green');
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="75" fill="green" />'
      );
    });
  });


    describe('Square Test', () => {
        test('Should display a blue square', () => {
          const shape = new Square();
          shape.setShapeColor('blue');
          expect(shape.render()).toEqual(
            '<rect x = \"75\" y=\"45\" width=\"150\" height=\"150\" style=\"fill:blue\" />'
          );
        });
      });
    

describe('Triangle Test', () => {
    test('Should display an orange triangle', () => {
      const shape = new Triangle();
      shape.setShapeColor('orange');
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
      );
    });
  });
  
  