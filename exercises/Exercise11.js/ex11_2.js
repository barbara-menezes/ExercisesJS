import requestHttpEpisodes from './ex11_1';

async function getEpisodesName() {
    try {
        const response = await requestHttpEpisodes();

        var names = [];
        for (var i = 0; i < response.length; i++)
        {
          names.push(response[i].title)
        }

        names.sort();
        return names;

      } catch (error) {
        return error;
      }
}

export default getEpisodesName;