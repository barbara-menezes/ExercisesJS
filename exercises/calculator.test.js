const { power, tenTimes, theFunction } = require('./calculator')

test('properly multiply two numbers', () => {
    const result = power(10);
    expect(result).toBe(100);
});

test('properly multiply a number ten times', () => {
    const result = tenTimes(7);
    expect(result).toBe(70);
});

test('call a multiply function', () => {
    const result = theFunction('power', 10);
    expect(result).toBe(100);
});

test('call a multiply function', () => {
    const result = theFunction('tenTimes', 10);
    expect(result).toBe(70);
});