function findCombinationsWithSumFromArray(arr) {
  const numSet = new Set(arr);
  const result = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (numSet.has(sum)) {
        const combination = [arr[i], arr[j], sum].sort().join("-");

        result.add(combination);
      }
    }
  }

  return Array.from(result).map((combination) =>
    combination.split("-").map(Number)
  );
}

const arr = [2, 3, 11, 30, 3, 1, 4, 14, 27, 17, 5];
const combinations = findCombinationsWithSumFromArray(arr);

console.log(combinations);
