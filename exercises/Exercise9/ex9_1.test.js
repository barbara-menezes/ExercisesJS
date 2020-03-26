import requestHttpCharacters from './ex9_1';
import baseurl from '../../mocks/APIBrekingBad/baseUrl';
import mockCharacters from '../../mocks/APIBrekingBad/mockCharacters.js';
import axios from 'axios';
jest.mock('axios');

describe('function requestHttpCharacters', () => {
    it('Should show the characters list', async () => {
        axios.get.mockReturnValue(mockCharacters);

        const result = await requestHttpCharacters();
        
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(baseurl + '/characters');
        expect(result).toEqual(mockCharacters);
    })
    it('Trows error from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValue(errorMessage);

        await requestHttpCharacters().catch(error => {
            expect(error).toThrowError(errorMessage);
          })
    });
})