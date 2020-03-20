
function squareRootSum(num1, num2){
       
      try {
       var square_sum = (Math.sqrt(num1) + Math.sqrt(num2));
        return parseFloat(square_sum.toFixed(2));
      } catch (error) {
         throw new Error ('Please try again, the values informed cannot be calculated');
      }
    
}

module.exports = squareRootSum;