import multiply from '../Exercise4/ex4';
import squareRoot from './square_root_sum';

function concatenate (text, num1, num2){

    try {
        
        var mult = multiply(num1, num2);

        if(!isNaN(mult)){

            if((num1%2==0) && (num2%2==0)){
                var square = squareRoot(num1, num2);
                return `${text} ${square}`;
            }
            
            return `${text} ${mult}`;
        }
    } catch (error) {
        throw TypeError;  
    }
}

export default concatenate;