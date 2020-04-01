
import getEpisodesName from './ex11_2';
import mockNameEpisodes from '../../mocks/APIBrekingBad/mockNameEpisodes';
import mockEpisodes from '../../mocks/APIBrekingBad/mockEpisodes.js';
import requestHttpEpisodes from './ex11_1';
jest.mock('./ex11_1');

describe('function getNumberOfCharacters', () => {
    it('Should show the number of characters', async () => {
        requestHttpEpisodes.mockResolvedValue(mockEpisodes);
        const result = await getEpisodesName();
        
        expect(result).toEqual(mockNameEpisodes);
    })
    it('Trows error from an API', async () => {
        const errorMessage = 'Network Error';
        requestHttpEpisodes.mockRejectedValue(errorMessage);

        await getEpisodesName().catch(error => {
            expect(error).toThrowError(errorMessage);
          })
    });
})