const multiplication = require('./multiplicateTwoNumbers');

describe('function multiplicate', () => {
    it('Should show a multiplication of two numbers', () => {
        const result = multiplication(10, 80);
    
        expect(result).toBe(800);
    })
})

describe('function multiplicate', () => {
    it('Should trow a message error', () => {
        
        try {
            const result = multiplication('teste', 80);    
            
            fail();
        } catch (error) {
            expect(error.message).toBe("Error has ocored!");
        }
        
    
       // 
    })
})
