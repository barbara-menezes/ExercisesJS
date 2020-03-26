import requestHttpCharacters from './ex9_1';

async function getAllCharacters() {
    try {
        const response = await requestHttpCharacters();
        return response.length;
      } catch (error) {
        return error;
      }
}

export default getAllCharacters;
