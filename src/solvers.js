/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = 0;
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //keep count of number of soltions.
  var solutionCount = 0;
  //make a new empty board with n length.
  var board = new Board({n:n});
  //write a recursive function that allows you to add a piece.
  //this function needs to check if there is a conflict after adding every piece.
  //if there is no conflict then recurse and increment the recursor fucntion to 
  //the next row.
  var findSolution = function(row){
    //basecase, once you have recrused to the end of the board(no more rows left)
    //increment the counter and then exit the specific line of recursion.
    if(row === n){
      solutionCount++;
      return;
    }
    
    //iterate through all elements in the row, 
    //place a piece in "i" spot, see if it causes a conflict.
    //if there is no conflict then call the recursion function 
    //again on the next row. 
    //this will continue until a conflict occurs or there are no more rows. 
    
    for(var i=0; i<n; i++){
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()){
        findSolution(row+1);
      }
      board.togglePiece(row, i);
    }
  }

  findSolution(0);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n:n});

  var findSolutions = function(row){
    //basecase 
    if(row === n){
      solutionCount++;
      return;
    }
    for(var i=0; i<n; i++){
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()){
        findSolution(row+1);
      }
      board.togglePiece(row, i);
    }
  }

  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
