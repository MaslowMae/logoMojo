// Jest tests for shapes
//imports the Shape class
// help from gpt on rendering shape tests without exact format match to svg elements
const { Circle, Square, Triangle, Shape } = require('./shapes.js');

describe('Shape class', () => {
    it('should render a circle with the correct fill color', () => {
        const shapeInstance = new Circle('example text', 'blue');
        expect(shapeInstance.render().trim()).toContain('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });

    it('should render a square with the correct fill color', () => {
        const shapeInstance = new Square('example text', 'green');
        expect(shapeInstance.render().trim()).toContain('<rect width="200" height="200" x="10" y="10" rx="20" ry="20" fill="green"/>');
    });

    it('should render a triangle with the correct fill color', () => {
        const shapeInstance = new Triangle('example text', 'red');
        expect(shapeInstance.render().trim()).toContain('<polygon points="50 15, 100 100, 0 100" fill="red"/>');
    });
});

// npx jest shapes.test.js