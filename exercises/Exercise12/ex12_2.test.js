import getCharactersName from './ex12_2';
import mockNameCharacters from '../../mocks/APIBrekingBad/mockNameCharacters';
import mockCharacters from '../../mocks/APIBrekingBad/mockCharacters.js';
import requestHttpCharacters from '../Exercise9/ex9_1';
jest.mock('../Exercise9/ex9_1');

describe('function getNumberOfCharacters', () => {
    it('Should show the number of characters', async () => {
        requestHttpCharacters.mockResolvedValue(mockCharacters);
        const result = await getCharactersName();
        
        expect(result).toEqual(mockNameCharacters);
    })
    it('Trows error from an API', async () => {
        const errorMessage = 'Network Error';
        requestHttpCharacters.mockRejectedValue(errorMessage);

        await getCharactersName().catch(error => {
            expect(error).toThrowError(errorMessage);
          })
    });
})