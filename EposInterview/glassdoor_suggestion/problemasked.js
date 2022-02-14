// ## Hi

// ## generate_board(lenght, height, mineCount)

// const generate_board = (lenght=10, height=10, mineCount=10) => {
//     let A = length.length;
//     let B = height.length;
//     let clickA = length[10];
//     let clickB = heigth[10];


//     let numA = clickA - 1;
//     let numB = clickB - 1;
//     let mineCount = 10;

//     for (let i = numA; i < numA; i++) {
//         numA.push(i);
//         return mineCount;
//         console.log(numA);
//     }
// }

var board = [10, 10, 10]

const generate_board = (lenght, height, mineCount) => {
    let board = []

    // for (let i = 0; i < board.length; i++) {

    //     // return board;
    //     // // board.push(i);
    //     // console.log(length(i));
    // }
     lenght.forEach((item) => {
         board.push(item(lenght));
  
     })

}

console.log(generate_board(10,10,10));