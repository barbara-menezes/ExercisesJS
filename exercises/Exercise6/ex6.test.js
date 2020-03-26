import multiply from '../Exercise4/ex4';
import concatenate from './ex6';
import squareRootSum from './square_root_sum/square_root_sum';

describe('function concatenate', () => {
    it('Should call function multiply and return a string', () => {
        const result = concatenate("olá", 2, 2);

        expect(result).toBe("olá 4");
    })
})

describe('function concatenate', () => {
    it('Should call function squareRootSum and return a string', () => {
        const result = concatenate("olá", 3, 3);

        expect(result).toBe("olá 3.46");
    })
})

describe('function concatenate', () => {
    it('Should trow a message error', () => {
        // try {
        //     concatenate("olá", "olá", 2);
            
        // } catch (error) {
        //     expect(error.message).toBe("Error has ocored!");
        // }

        expect(() => {concatenate("olá", "olá", 2)}).toThrowError("Error");
    })
})