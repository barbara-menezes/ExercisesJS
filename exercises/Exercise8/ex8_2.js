import getName from '../Exercise7/ex7_1';

async function helloAsync(){
    let result = await getName();
    return `Hello ${result}`;
}

export default helloAsync;