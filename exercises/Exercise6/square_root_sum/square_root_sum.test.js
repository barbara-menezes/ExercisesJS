import squareRootSum from './square_root_sum';

describe('function squareRootSum', () => {
    it('Should show a calc of square root of two natural numbers', () => {
        const result = squareRootSum(3, 3);
    
        expect(result).toBe(3.46);
    })
})

describe('function squareRootSum', () => {
    it('Should show a calc of square root of numbers where the resut is the nuber itself', () => {
        const result = squareRootSum(0, 0);
    
        expect(result).toBe(0);
    })
})

describe('function squareRootSum', () => {
    it('Should trhow a error on calc of square root for a negative number', () => {

        // try {
        //     console.log('outro erro');
        //     squareRootSum("teste", "teste");
        // } catch (error) {
        //     expect(error.message).toBe('Please try again, the values informed cannot be calculated');
        // }

    expect(() => {squareRootSum("teste", "teste")}).toThrowError('Please try again, the values informed cannot be calculated');

    })
})

describe('function squareRootSum', () => {
    it('Should trow a message error', () => {
        
        try {
            squareRootSum("test");
        } catch (error) {
            expect(error.message).toBe('Please try again, the values informed cannot be calculated');
        }
    })
})