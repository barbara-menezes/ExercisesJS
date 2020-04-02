import requestHttpEpisodes from './ex12_1';
import baseurl from '../../mocks/APIBrekingBad/baseUrl';
import mockEpisodes from '../../mocks/APIBrekingBad/mockCharacters.js';
import axios from 'axios';
jest.mock('axios');

describe('function requestHttpEpisodies', () => {
    it('Should show the episodes list', async () => {
        axios.get.mockReturnValue(mockEpisodes);

        const result = await requestHttpEpisodes();
        
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(baseurl + '/episodes');
        expect(result).toEqual(mockEpisodes);
    })
    it('Trows error from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValue(errorMessage);

        await requestHttpEpisodes().catch(error => {
            expect(error).toThrowError(errorMessage);
          })
    });
})