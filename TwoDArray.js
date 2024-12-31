function printMatrix(N, M, arr) {
  for (let i = 0; i < N; i++) {
    let str = "";
    for (let j = 0; j < M; j++) {
      str += arr[i][j] + " ";
    }
    console.log(str);
  }
}

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

printMatrix(3, 2, arr);
