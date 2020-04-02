import requestHttpCharacters from '../Exercise9/ex9_1';
import _ from 'lodash';

async function getCharactersName() {
    try {
        const response = await requestHttpCharacters();

        var names = [];
        _.forEach(response, function(obj) {
            names.push(obj.name);
        })

        names.sort();
        return names;

      } catch (error) {
        return error;
      }
}

export default getCharactersName;