/**
 * 1 = 육지, 0 = 바다 라고 할 때 바다에 의해 둘러쌓인 섬 갯수 세기
 */
function differentiateMap(arr) {
  for (let x = 0; x < arr[0].length; x++) {
    for (let y = arr.length - 1; y >= 0; y--) {
      const element = arr[y][x];
      const nextDown = arr[y + 1]?.[x];

      if (element === 1 && nextDown === element) {
        arr[y + 1][x] = 0;
        arr[y][x] = 1;
      }
    }
  }

  for (let y = 0; y < arr.length; y++) {
    for (let x = arr[0].length - 1; x >= 0; x--) {
      const element = arr[y][x];
      const nextRight = arr[y]?.[x + 1];

      if (element === 1 && nextRight === element) {
        arr[y][x + 1] = 0;
        arr[y][x] = 1;
      }
    }
  }

  let count = 0;

  arr.forEach((row) =>
    row.forEach((column) => {
      if (column === 1) count++;
    })
  );

  return count;
}

const sample1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const sample1Solution = differentiateMap(sample1);
console.log(sample1Solution);
console.log(sample1Solution === 1);

// sample2
const sample2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
const expectedSample = 3;

const sample1Solution2 = differentiateMap(sample2);
console.log(sample1Solution2);
console.log(sample1Solution2 === 3);

