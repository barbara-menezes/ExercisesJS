//exercise3

function power(num) {
    return num * num
  }
  
  function tenTimes(num) { 
    return 10 * num
  }
  
  function theFunction(fn, num) {
    return fn(num);
  }

  module.exports = { power, tenTimes, theFunction};