import multiply from '../Exercise4/ex4';
import concatenate from '../Exercise5/ex5';
jest.mock('../Exercise4/ex4');

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
    it('Should call the subfunction with mock values', () => {
        multiply.mockReturnValue(4);
        concatenate("ola", 2, 2);
  
        expect(multiply).toHaveBeenCalledTimes(2);
        expect(multiply).toBeCalledWith(2, 2);
    })
 })

 describe('function concatenate', () => {
    it('Should return a string', () => {
        const result = concatenate("ola", 2, 2);
  
        expect(result).toBe("ola 4");
 })
})
 