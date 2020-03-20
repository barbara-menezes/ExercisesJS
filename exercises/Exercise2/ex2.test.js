const { personalData, save } = require('../Exercise2/ex2')

describe('Should show the age of the person', () => {
    const result = personalData({ name: 'John', age: 30 });
    
    expect(result).toMatch('John is 30 years old');
})

describe('Should show the name and age of the people', () => {
    it('Should show the data of the people without mock the values', () => {
        console.log = jest.fn();
        save();
        expect(console.log).toHaveBeenCalledWith('John is 30 years old');
        expect(console.log).toHaveBeenCalledWith('Marie is 22 years old');
        expect(console.log).toHaveBeenCalledWith('August is 30 years old');
        expect(console.log).toHaveBeenCalledTimes(3);
    })
})