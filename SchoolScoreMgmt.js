let studentScoreCard = [
  ["Student1", 50],
  ["Student2", 30],
  ["Student3", 25],
  ["Student4", 47],
  ["Student5", 67],
  ["Student6", 82],
  ["Student7", 18],
  ["Student8", 74],
  ["Student9", 59],
  ["Student10", 29],
];

for (let i = 0; i <= studentScoreCard.length - 1; i++) {
  //* adding marks if the marks are less than 40
  if (studentScoreCard[i][1] < 40) {
    studentScoreCard[i][1] += 20;
    //* If the marks are above 90 then makes then 90
  } else if (studentScoreCard[i][1] > 90) {
    studentScoreCard[i][1] = 90;
  }
}

console.log(studentScoreCard);

let passedStudents = 0;

for (let j = 0; j <= studentScoreCard.length - 1; j++) {
  if (studentScoreCard[j][1] >= 50) {
    passedStudents++;
  }
}

console.log("Number of passed students :", passedStudents);
