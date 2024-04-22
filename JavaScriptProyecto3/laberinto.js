const createMaze = () => {
  //creating walls
  let maze = new Array(30).fill().map(() => new Array(30).fill("█"));

  //Erasing walls
  for (i = 1; i < 29; i++) {
    for (j = 1; j < 29; j++) {
      if (Math.random() < 0.8) {
        maze[i][j] = " ";
      }
    }
  }

  //creating entry
  maze[0][0] = " ";
  maze[1][0] = " ";

  //creating random exit
  const exit = Math.ceil((Math.random() * 100) / 3) + 1;
  maze[exit][29] = " ";

  // printing maze
  // for (let row of maze) {
  //   console.log(row.join(""));
  // }
  return maze;
};

const findExit = (maze) => {
  // maze[0][0] = "©";
  // console.log(maze.length);
  let visited = new Array(30).fill().map(() => new Array(30).fill(false));
  const visitOrder = [];

  const search = (i, j) => {
    if (i < 0 || i >= maze.length || j < 0 || j >= maze[0].length) {
      return;
    }
    if (visited[i][j] || maze[i][j] !== " ") {
      return;
    }

    visitOrder.push([i, j]);
    visited[i][j] = true;
    maze[i][j] = "©"; // Marcar la celda como visitada con el símbolo "©"

    search(i + 1, j);
    search(i - 1, j);
    search(i, j + 1);
    search(i, j - 1);

    // Si no hay más caminos disponibles, retroceder
    visitOrder.pop();
    maze[i][j] = " ";
  };

  // const search = (i, j) => {
  //   if (maze[i + 1][j] === " " && visited[i][j] === false) {
  //     visitOrder.push([i, j]);
  //     visited[i], ([j] = true);
  //     search(i, j);
  //   } else if (maze[i - 1][j] === " " && visited[i][j] === false) {
  //     visitOrder.push([i, j]);
  //     visited[i], ([j] = true);
  //     search(i, j);
  //   } else if (maze[i][j + 1] === " " && visited[i][j] === false) {
  //     visitOrder.push([i, j]);
  //     visited[i], ([j] = true);
  //     search(i, j);
  //   } else if (maze[i][j - 1] === " " && visited[i][j] === false) {
  //     visitOrder.push([i, j]);
  //     visited[i], ([j] = true);
  //     search(i, j);
  //   } else {
  //     visitOrder.pop(visitOrder.length - 1);
  //     search(
  //       visitOrder[visitOrder.length - 1][0],
  //       visitOrder[visitOrder.length - 1][1]
  //     );
  //   }
  // };

  search(0, 0);
  console.log(visitOrder);
  //********************printing maze**************************
  for (let row of maze) {
    console.log(row.join(""));
  }
};

// const findExit2 = (maze) => {
//   const numRows = maze.length;
//   const numCols = maze[0].length;
//   let visited = new Array(numRows)
//     .fill()
//     .map(() => new Array(numCols).fill(false));

//   const dfs = (i, j) => {
//     // Base cases: check if we are out of bounds or hitting a wall
//     if (
//       i < 0 ||
//       i >= numRows ||
//       j < 0 ||
//       j >= numCols ||
//       maze[i][j] === "█" ||
//       visited[i][j]
//     ) {
//       return false;
//     }

//     // Check if we reached the exit
//     if (j === numCols - 1) {
//       maze[i][j] = "©"; // Mark the path with ©
//       return true;
//     }

//     visited[i][j] = true;

//     // Explore neighbors (up, down, left, right)
//     if (dfs(i + 1, j) || dfs(i - 1, j) || dfs(i, j + 1) || dfs(i, j - 1)) {
//       maze[i][j] = "©"; // Mark the path with ©
//       return true;
//     }

//     return false;
//   };

//   // Start DFS from the entrance
//   if (dfs(0, 0)) {
//     // If there's a path to exit, print the maze with the path marked
//     for (let row of maze) {
//       console.log(row.join(""));
//     }
//   } else {
//     console.log("No hay salida en el laberinto.");
//   }
// };

findExit(createMaze());
