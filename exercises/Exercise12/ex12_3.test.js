import getEpisodesFirstLetter from './ex12_3';
import mockEpisodes from '../../mocks/APIBrekingBad/mockEpisodes.js';
import mockFirstLetterEpisodes from '../../mocks/APIBrekingBad/mockFirstLetterEpisode.js'
import requestHttpEpisodes from '../Exercise11/ex11_1';
jest.mock('../Exercise11/ex11_1');

describe('function getEpisodesFirstLetter', () => {
    it('Should show the number of characters', async () => {
        requestHttpEpisodes.mockResolvedValue(mockEpisodes);
        const result = await getEpisodesFirstLetter();
        
        expect(result).toEqual(mockFirstLetterEpisodes);
    })
    it('Trows error from an API', async () => {
        const errorMessage = 'Network Error';
        requestHttpEpisodes.mockRejectedValue(errorMessage);

        await getEpisodesFirstLetter().catch(error => {
            expect(error).toThrowError(errorMessage);
          })
    });
})