import helloAsync from './ex8_2';
import getName from '../Exercise7/ex7_1';
jest.mock('../Exercise7/ex7_1');

describe('function helloAsync', () => {
    it('Should show the name concatenated with hello', async () => {
         getName.mockResolvedValue('Arceus');
         const result = await helloAsync();
         
         expect(getName).toHaveBeenCalledTimes(1);
         expect(result).toEqual("Hello Arceus");
    })
})