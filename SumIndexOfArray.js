function sumOfIndices(N, M) {
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr[i] = [];
    for (let j = 0; j < M; j++) {
      arr[i][j] = i + j;
    }
  }

  console.log(arr);
}

sumOfIndices(3, 2);
