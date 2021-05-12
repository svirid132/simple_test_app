let func = (accumulator, value, index, array) => {...(return)}

let resutlt = Array.reduce(func, baseAccumValue);
accumulator//this futher result

reduce//уменьшить

let func = (a, b) => a - b;
//return + then -> 
//if return - then <-
let arr = arr.sort(func);

Object.values(object1)//to Array

//arr = [[1, val1], [2, val2], [3, val3]];
Object.fromEntries(arr)//or map
//been {1: val1, 2: val2, 3: val3}

Object.entries({'n1': '123', 'n2': '321'})// [ ['n1': '123'], ['n2', '321] ]

//task: 
// Умножить значине обьекта на 3 через entries