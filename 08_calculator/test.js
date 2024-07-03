function add(a, b) {
    return a + b;
};

function multiply(array) {
    return array.reduce((sum, current) => sum * current, 0);
};

function factorial (a) {
  
    let product = 1;
    
    for(let i = 1; i < a; a--) {
      product *= a;
    }
    
    return product;
  
  };

  console.log(factorial(3));
