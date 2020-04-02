import baseurl from '../../mocks/APIBrekingBad/baseUrl';
const axios = require('axios');

async function requestHttpEpisodes() {
  try {
    const response = await axios.get(baseurl + '/episodes');
    return response;
  } catch (error) {
    return error;
  }
};

export default requestHttpEpisodes;