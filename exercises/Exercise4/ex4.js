function multiply(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
           throw new Error("Error has ocored!");
        }else{
            return (num1 * num2);
        }
}

module.exports = multiply;