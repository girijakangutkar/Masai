function circularTravelOverArray(N, M, arr) {
  let str = "";
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < M; j++) {
      if (j == 0) {
        str += arr[i][j] + " ";
      }
    }

    for (let j = 0; j < M; j++) {
      if (i == 0 && j > 0) {
        str += arr[i][j] + " ";
      }
    }
  }

  //console.log(str)

  let str2 = "";
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i > 0 && j == M - 1) {
        str2 += arr[i][j] + " ";
      }
    }

    for (let j = M - 1; j >= 0; j--) {
      if (i == M - 1 && j > 0 && j < M - 1) {
        str2 += arr[i][j] + " ";
      }
    }
  }

  //console.log(str2)

  let result = str + str2;

  console.log(result);
}

let rows = 3;
let cols = 4;

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

circularTravelOverArray(rows, cols, arr);
