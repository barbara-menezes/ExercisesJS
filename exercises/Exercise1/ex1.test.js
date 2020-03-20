const showWelcomeMessage = require('../Exercise1/ex1')

describe('function welcome message', () => {
    it('Show welcome message', () => {
        const result = showWelcomeMessage();
        
        expect(result).toBe('Hello there! Welcome');
    })
})