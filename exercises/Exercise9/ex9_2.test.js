import getNumberOfCharacters from './ex9_2';
import mockCharacters from '../../mocks/APIBrekingBad/mockCharacters.js';
import requestHttpCharacters from './ex9_1';
jest.mock('./ex9_1');

describe('function getNumberOfCharacters', () => {
    it('Should show the number of characters', async () => {
        requestHttpCharacters.mockResolvedValue(mockCharacters);
        const result = await getNumberOfCharacters();
        
        expect(result).toEqual(63);
    })
    it('Trows error from an API', async () => {
        const errorMessage = 'Network Error';
        requestHttpCharacters.mockRejectedValue(errorMessage);

        await getNumberOfCharacters().catch(error => {
            expect(error).toThrowError(errorMessage);
          })
    });
})