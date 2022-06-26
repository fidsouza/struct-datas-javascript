let averageTemp = [];

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 72;
averageTemp[0][2] = 81;
averageTemp[0][3] = 79;
averageTemp[0][4] = 75;
averageTemp[0][5] = 73;

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 81;
averageTemp[1][2] = 79;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;
averageTemp[1][6] = 71;
averageTemp[1][7] = 73;

function forPrintMatrix(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    console.log(matrix[i]);
    for (let j = 0; j < matrix[i].length; j += 1) {
      console.log(matrix[i][j]);
    }
  }
}
forPrintMatrix(averageTemp);
