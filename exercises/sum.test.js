const sum = require('./sum')

test('properly adds two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
})