import multiply from '../Exercise4/ex4';

function concatenate (text, num1, num2){
    
    var mult = multiply(num1, num2);
    
    if(isNaN(mult)){
        throw new Error("Error has ocored!");
    }
    return `${text} ${mult}`;
    
}

export default concatenate;