const showWelcomeMessage = require('./welcomeMessage')

describe('function welcome message', () => {
    it('Show welcome message', () => {
        const result = showWelcomeMessage();
        
        expect(result).toBe('Hello there! Welcome');
    })
})