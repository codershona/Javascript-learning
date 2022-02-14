 // Minesweeper ====

Let's play the minesweeper game (Wikipedia, online game)!

You are given an m x n char matrix board representing the game board where:

'M' represents an unrevealed mine,
'E' represents an unrevealed empty square,
'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
'X' represents a revealed mine.
You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').

Return the board after revealing this position according to the following rules:

If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
 

Example 1:


Input: board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]
Output: [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
Example 2:


Input: board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]
Output: [["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]

SOLUTION: O(n)

const updateBoard = (board, click) => {
    const A = board.length;
    const D = board[0].length;
    const clickA = click[0];
    const clickD = click[1];
    
     if(board[clickA][clickD] == 'M') {
    board[clickA][clickD] = 'X';
    return board; // This will hit 'M'
  }
   
   if(board[clickA][clickD] == 'B') {
       return board;
   }
    
    let tempA = clickA - 1;
    let tempD = clickD - 1;
    let mineClick = 0;
    
    for (let i = tempA; i < tempA + 3; i++) {
        for (let j = tempD; j < tempD + 3; j++) {
            if (i < 0 || i >= A || j < 0 || j >= D) continue;
            if (board[i][j] == 'M') mineClick++; // This will hit 'E'
        }
    }
    
    if(mineClick != 0) {
        board[clickA][clickD] = mineClick.toString();
        return board;
    }
     board[clickA][clickD] = 'B'
    
    for (let i = tempA; i < tempA + 3; i++) {
        for (let j = tempD; j < tempD + 3; j++) {
            if (i < 0 || i >= A || j < 0 || j >= D) continue;
            board = updateBoard(board, [i, j]);
        }
    }
    return board;
};




