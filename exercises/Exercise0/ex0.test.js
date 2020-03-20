const sum = require('../Exercise0/ex0')

describe('Should show the sum of two numbers', () => {
  it ('properly adds two numbers', () => {
    const result = sum(1, 2);
    
    expect(result).toBe(3);
   })
});

