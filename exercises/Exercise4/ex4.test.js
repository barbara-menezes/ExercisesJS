const multiply = require('../Exercise4/ex4');
jest.mock()

describe('function multiply', () => {
    it('Should show a multiply of two numbers', () => {
        const result = multiply(10, 80);
    
        expect(result).toBe(800);
    })
})

describe('function multiplicate', () => {
    it('Should trow a message error', () => {
        
        try {
            multiply('teste', 80);
            
            fail();
        } catch (error) {
            expect(error.message).toBe("Error has ocored!");
        }
    })
})
