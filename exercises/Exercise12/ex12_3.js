import requestHttpEpisodes from '../Exercise11/ex11_1';
import _ from 'lodash';

async function getEpisodesFirstLetter() {
    try {
        const response = await requestHttpEpisodes();

        var names = [];
        _.filter(response, function(element){
            names.push(element.title.substr(0, 1))
        })

        var map = _.reduce(names, function(prev, cur) {
            prev[cur] = (prev[cur] || 0) + 1;
            return prev;
          }, {});

        return map;

      } catch (error) {
        return error;
      }
}

export default getEpisodesFirstLetter;