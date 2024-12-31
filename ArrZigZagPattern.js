function zigZagMatrix(N, M, arr) {
  let str = "";
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      for (let j = M - 1; j >= 0; j--) {
        str += arr[i][j] + " ";
      }
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        str += arr[i][j] + " ";
      }
    }
  }
  console.log(str);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

zigZagMatrix(3, 3, arr);
