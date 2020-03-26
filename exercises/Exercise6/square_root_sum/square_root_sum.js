
function squareRootSum(num1, num2){
       
      if(!isNaN(num1) && !isNaN(num2)){
       var square_sum = (Math.sqrt(num1) + Math.sqrt(num2));
       return parseFloat(square_sum.toFixed(2));
      }
      throw new Error ('Please try again, the values informed cannot be calculated');
}

export default squareRootSum;