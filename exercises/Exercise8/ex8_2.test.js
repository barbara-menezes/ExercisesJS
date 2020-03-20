import helloAsync from './ex8_2';
import getName from '../Exercise7/ex7_1';

describe('function helloAsync', () => {
    it('Should show the name concatenated with hello', () => {
         const result = helloAsync();
         
         expect(result).toBe("Hello");
    })
})