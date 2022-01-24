Given a rectangle represented by a 0-1 2-d array and assume it contains one rectangle of all 0, return the upper left corner and lower right corner.
Example:
[[1,1,1,1,1],
[1,0,0,1,1],
[1,0,0,1,1],
[1,1,1,1,1]], you should return [[[1,1],[2,2]]]

Followup, what if there are multiple rectangles that are made of 0, return all.
Example:
[[1,1,1,1,1],
[1,0,0,1,1],
[1,0,0,1,1],
[1,1,1,1,0]], you should return [[[1,1],[2,2]],[[3,4],[3,4]]]


SOLUTION:


function tmp(x, y, image) {  
  if (  y  > image.length -1 || x > image[0].length - 1 ||  image[y][x] === 1)
      return [0, 0];
  image[y][x] = 1; 
  let width = tmp(x+1, y, image)[0] + 1;
  let height = tmp(x, y+1, image)[1] + 1; 
  return [width, height];
} 

function findRectangle(image) {
  let row = image.length; //8 -> y
  let col = image[0].length; // 7 ->x
  let result = [];//[i, j]
   
  for(let i=0; i < col; i++) { //x, i, col
      for(let j=0; j < row; j++) { //y, j , row
          if (image[j][i] === 0) { //image[row][col] 
            let [width, height] = tmp(i, j, image, 0, 0); 
            result.push([[i, j], [width, height]]);
            j += height;
          }    
       }
  }
  return result;
}