const showWelcomeMessage = require('./welcomeMessage')

test('show welcome message', () => {
    const result = showWelcomeMessage();
    expect(result).toBe(console.log('Hello there! Welcome'));
})