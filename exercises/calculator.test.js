const { power, tenTimes, theFunction } = require('./calculator')

describe('Function power', () => {
        it('Should multiply the same number two times', () => {
        const result = power(10);

        expect(result).toBe(100);
    })
});

describe('Function tenTimes', () => {
    it('Should multiply the value number ten times', () => {
        const result = tenTimes(7);

        expect(result).toBe(70);
    })
});

describe('Function theFunction tenTimes', () => {
    it('Should call the subfunction without mock values', () => {
        const tenTimes = jest.fn();
        theFunction(tenTimes, 7);

        expect(tenTimes).toHaveBeenCalledTimes(1);
        expect(tenTimes).toHaveBeenCalledWith(7);
    })
});