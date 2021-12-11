// FUNCTION-RETURN ROWS---------------------------------------------------------------------------------------
export const rowsVariaty = (array) => {
  let rows;
  const minRows = Math.floor(Math.sqrt(array.length)); //if rows > 2 we can +- one or two row for varity
  const plusOrMinusSign = Math.floor(Math.random() * 2) ? 1 : -1;
  if (minRows > 2) {
    rows = minRows + Math.floor(Math.random() * 2) * plusOrMinusSign;
  } else if (minRows <= 2 && minRows > 0) {
    rows = minRows + Math.floor(Math.random() * 2);
  } else {
    rows = 0;
  }

  let words = array.length;
  let grid = [];

  for (let i = 0; i < rows; i++) {
    if (i === rows - 1) {
      grid.push(words);
    } else {
      const wordsInRow = Math.floor(
        words / (rows - i) + Math.floor(Math.random() * 2) * plusOrMinusSign
      );
      words -= wordsInRow;
      grid.push(wordsInRow);
    }
  }

  const arrayCopy = [...array];

  const result = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    result[i] = [];
    for (let j = 0; j < row; j++) {
      const randomNumber = Math.floor(Math.random() * arrayCopy.length);
      const randomElement = arrayCopy.splice(randomNumber, 1)[0];
      result[i].push(randomElement);
    }
  }

  return result;
};

// FUNCTION -END---------------------------------------------------------------------------------------
