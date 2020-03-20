import multiply from '../Exercise4/ex4';
import concatenate from '../Exercise6/ex6';
import squareRootSum from '../Exercise6/square_root_sum/square_root_sum';
jest.mock('../Exercise4/ex4');
jest.mock('../Exercise6/square_root_sum/square_root_sum');

describe('function concatenate', () => {
    it('Should call function multiply and return a string', () => {
        const result = concatenate("olá", 2, 2);

        expect(result).toBe("olá 4");
    })
})

describe('function concatenate', () => {
    it('Should call function squareRootSum and return a string', () => {
        const result = concatenate("olá", 3, 3);

        expect(result).toBe("olá 3.4");
    })
})

describe('function concatenate', () => {
    it('Should trow a message error', () => {
        try {
            concatenate("olá", "olá", 2);
            
        } catch (error) {
            expect(error.message).toBe("Error has ocored!");
        }
    })
})

describe('function concatenate', () => {
    it('Should call the subfunction multiply with mock values', () => {
        multiply.mockReturnValue(4);
        concatenate("ola", 2, 2);
  
        expect(multiply).toHaveBeenCalledTimes(1)
        expect(multiply).toHaveBeenCalledWith(2, 2);
    })
 })
 
 describe('function concatenate', () => {
    it('Should call the subfunction square_root_sum with mock values', () => {
        squareRootSum.mockReturnValue(4);
        concatenate("ola", 3, 3);

        expect(squareRootSum).toHaveBeenCalledTimes(1)
        expect(squareRootSum).toHaveBeenCalledWith(3, 3);
    })
})