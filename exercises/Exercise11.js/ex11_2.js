import requestHttpEpisodes from './ex11_1';

async function getCharactersName() {
    try {
        const response = await requestHttpEpisodes();

        var names = [];
        for (var i = 0; i < response.length; i++)
        {
          names.push(response[i].title)
        }

        names.sort();
        return response;

      } catch (error) {
        return error;
      }
}

export default getCharactersName;