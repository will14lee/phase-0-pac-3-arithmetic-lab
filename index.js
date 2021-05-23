function add(a,b){
    a=4;
    b=9;
    add(a+b);
}

function subtract(a,b){
    a=4;
    b=9;
    subtract(a-b);
}

function multiply(a,b){
    a=4;
    b=9;
    multiply(a*b);
}

function divide(a,b){
    a=9;
    b=9;
    divide(a/b);
}

function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return (a-b)
}

function multiply(a,b){
    return (a*b)
}

function divide (a,b){
    return (a/b)
}    

function increment(n){
    n++
    return n
}

function decrement(n){
    n--
    return n
}

function makeInt(string){
    return  parseInt(string, 10)
}

function preserveDecimal(n){
  if (n === "2.222"){
    return parseFloat(n);
  }
  if (n='sldkjflksjf'){
    return parseFloat(n);
  }
}
    
