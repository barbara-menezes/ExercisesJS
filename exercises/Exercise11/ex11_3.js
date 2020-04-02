
import requestHttpEpisodes from './ex11_1';

async function getEpisodesFirstLetter() {
    try {
        const response = await requestHttpEpisodes();

        var names = [];
        for (var i = 0; i < response.length; i++)
        {
            var title = response[i].title;
            names.push(title.substr(0, 1))
        }

        var map = names.reduce(function(prev, cur) {
          prev[cur] = (prev[cur] || 0) + 1;
          return prev;
        }, {});

        return map;

      } catch (error) {
        return error;
      }
}

export default getEpisodesFirstLetter;