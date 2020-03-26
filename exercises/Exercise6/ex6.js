import multiply from '../Exercise4/ex4';
import squareRootSum from './square_root_sum/square_root_sum';

function concatenate (text, num1, num2){
    
    if(!isNaN(num1) && !isNaN(num2)){
        var mult = multiply(num1, num2);
        if((num1%2!==0) && (num2%2!==0)){
            var square = squareRootSum(num1, num2);
            return `${text} ${square}`;
        }
        return `${text} ${mult}`;
    }
    throw ('Error');
}

export default concatenate;