const multiplication = require('./multiplicateTwoNumbers');

test('multiplication of two numbers', () => {
    const result = multiplication(10, 80);
    expect(result).toBe(8000);
})

