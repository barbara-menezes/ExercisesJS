import getName from '../Exercise7/ex7_1';

function helloSyntax(){
    return getName().then((value) => {
        return `Hello ${value}`;
    });
}

export default helloSyntax;