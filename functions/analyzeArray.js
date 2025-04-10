function average(arrayOfNumbers) {
  const sum = arrayOfNumbers.reduce((prev, curr) => prev + curr, 0);

  return sum / arrayOfNumbers.length;
}

function min(arrayOfNumbers) {
  return Math.min(...arrayOfNumbers);
}

function max(arrayOfNumbers) {
  return Math.max(...arrayOfNumbers);
}

export default function analyzeArray(arrayOfNumbers) {
  return {
    average: average(arrayOfNumbers),
    min: min(arrayOfNumbers),
    max: max(arrayOfNumbers),
    length: arrayOfNumbers.length,
  };
}
