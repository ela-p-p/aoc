//Part One

const programAlarm = input => {
  let sliceBegin = 0;
  let sliceEnd = 4;
  while (sliceEnd < input.length) {
    let tempArray = input.slice(sliceBegin, sliceEnd);
    let firstInt = tempArray[1];
    let secondInt = tempArray[2];
    let inputIndex = tempArray[3];
    if (tempArray[0] === 1) {
      input[inputIndex] = input[firstInt] + input[secondInt];
    }
    if (tempArray[0] === 2) {
      input[inputIndex] = input[firstInt] * input[secondInt];
    }
    if (tempArray[0] === 99) {
      return input[0];
    }
    if (tempArray[0] !== 1 && tempArray[0] !== 2 && tempArray[0] !== 99) {
      return "Something went wrong";
    }
    sliceBegin += 4;
    sliceEnd += 4;
  }
  return input[0];
};

const input = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  10,
  1,
  19,
  1,
  19,
  9,
  23,
  1,
  23,
  6,
  27,
  1,
  9,
  27,
  31,
  1,
  31,
  10,
  35,
  2,
  13,
  35,
  39,
  1,
  39,
  10,
  43,
  1,
  43,
  9,
  47,
  1,
  47,
  13,
  51,
  1,
  51,
  13,
  55,
  2,
  55,
  6,
  59,
  1,
  59,
  5,
  63,
  2,
  10,
  63,
  67,
  1,
  67,
  9,
  71,
  1,
  71,
  13,
  75,
  1,
  6,
  75,
  79,
  1,
  10,
  79,
  83,
  2,
  9,
  83,
  87,
  1,
  87,
  5,
  91,
  2,
  91,
  9,
  95,
  1,
  6,
  95,
  99,
  1,
  99,
  5,
  103,
  2,
  103,
  10,
  107,
  1,
  107,
  6,
  111,
  2,
  9,
  111,
  115,
  2,
  9,
  115,
  119,
  2,
  13,
  119,
  123,
  1,
  123,
  9,
  127,
  1,
  5,
  127,
  131,
  1,
  131,
  2,
  135,
  1,
  135,
  6,
  0,
  99,
  2,
  0,
  14,
  0
];
const setup = input => {
  const initMemory = [...input];
  initMemory[1] = 12;
  initMemory[2] = 2;
  return initMemory;
};

const results = programAlarm(setup(input));
console.log("Day2-Part1 is", results);

const findPair = input => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const initMemory = [...input];
      initMemory[1] = noun;
      initMemory[2] = verb;
      if (programAlarm(initMemory) === 19690720) {
        const result = noun * 100 + verb;
        return `Day2-Part2 is ${result}`;
      }
    }
  }
};

console.log(findPair(input));
