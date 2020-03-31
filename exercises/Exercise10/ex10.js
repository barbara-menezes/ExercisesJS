import requestHttpCharacters from '../Exercise9/ex9_1';

async function getCharactersName() {
    try {
        const response = await requestHttpCharacters();

        var names = [];
        for (var i = 0; i < response.data.length; i++)
        {
            names.push(response.data[i].name);
        }

        // names.map(i => {
        //     names.push(response.data[i].name);
        // });

        names.sort();

        return names;

      } catch (error) {
        return error;
      }
}

export default getCharactersName;
