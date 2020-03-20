import getName from '../Exercise7/ex7_1';

async function helloAsync(){
    let value = await getName();
    return `Hello ${value}`
}

helloAsync();

export default helloAsync;