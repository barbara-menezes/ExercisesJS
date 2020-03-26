import helloSyntax from './ex8_1';
import getName from '../Exercise7/ex7_1';
jest.mock('../Exercise7/ex7_1');

describe('function helloSyntax', () => {
    it('Should show the name concatenated with hello', async() => {
        getName.mockResolvedValue('Arceus');
         const result = await helloSyntax();
         
         expect(getName).toHaveBeenCalledTimes(1);
         expect(result).toEqual("Hello Arceus");
    });
});
