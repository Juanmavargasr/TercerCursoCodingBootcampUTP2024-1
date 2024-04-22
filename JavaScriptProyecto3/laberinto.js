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
    maze[i][j] = "©";

    search(i + 1, j);
    search(i - 1, j);
    search(i, j + 1);
    search(i, j - 1);

    visitOrder.pop();
    maze[i][j] = " ";
  };

  search(0, 0);
  console.log(visitOrder);
  //********************printing maze**************************
  for (let row of maze) {
    console.log(row.join(""));
  }
};

findExit(createMaze());
