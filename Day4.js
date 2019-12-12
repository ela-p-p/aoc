//6 digits
//increasing or stay the same
//atleast 1 set of doubles
//range = 183564-657474 between these two numbers

//part 1
const min = 183564;
const max = 657474;

const isIncreasing = num => {
  const string = num.toString();
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] > string[i + 1]) {
      return false;
    }
  }
  return true;
};

const hasAdjacent = num => {
  let i = 0;
  let string = num.toString();

  while (i < string.length - 1) {
    x = string[i];
    y = string[i + 1];
    z = string[i + 2];
    if (x === y) {
      return num;
    }
    i++;
  }
  return false;
};

const passwordCreator = (max, min) => {
  const numsArray = [];
  while (min <= max) {
    if (isIncreasing(min) && hasAdjacent(min)) {
      numsArray.push(min);
    }
    min++;
  }
  console.log(numsArray.length);
  return numsArray;
};

const hasAdjacentStrict = data => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const x = data[i].toString();
    //for loop to get one element. convert to string so can iterate
    for (let j = 0; j < x.length; j++) {
        //inner for loop, loops over each string, one character at a time. j
      if (x[j] === x[j + 1] && x[j + 1] !== x[j + 2] && x[j] !== x[j - 1]) {
        result.push(x);
        //as soon as if check passes, push x on and break out if, and inner for. j
        //will be back in outer for loop and i++
        break;
      }
    }
  }
  console.log("length", result.length);
  // return result;
};

let results = passwordCreator(max, min);
let data = [555666];
//console.log('resultsPart1', results)
console.log(hasAdjacentStrict(results));
