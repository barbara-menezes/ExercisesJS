import baseurl from '../../mocks/APIBrekingBad/baseUrl';
const axios = require('axios');

async function requestHttpCharacters() {
  try {
    const response = await axios.get(baseurl + '/characters');
    return response;
  } catch (error) {
    return error;
  }
};

export default requestHttpCharacters;