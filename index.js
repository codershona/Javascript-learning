// creating a fucntion whhere array1 is first parameter and array2 is second parameter
function mergeSortedArrrays(array1, array2) {
   const mergedArray = [];
   let array1Item = array1[0];
   let array2Item = array2[0];
   let i = 1;
   let j = 1;

   // Check Input 
   if(array1.length === 0) {
     return array2;
   }

   if (array2.length === 0) {
     return array1;
   }

   // using while loop or for loop
   // while loop
   while (array1Item || array2Item) {
     console.log(array1Item, array2Item);
      // if (array1Item < array2Item) {
        if (!array2Item || array1Item < array2Item) {
          // if(array2Item === undefined || array1Item < array2Item){
      //  if (!undefined || array1Item < array2Item) {        mergedArray.push(array1Item)
        // array1Item = array1[1]
        array1Item = array1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
   }


   return mergedArray;
}
// undefined < 6
// console.log('answer', undefined < 6);
// mergeSortedArrrays([0,3,4,31], [4,6,30]);
mergeSortedArrrays([0,3,4], [4,6,30]);


// mergeSortedArrrays([0,3,4,31], []);







// mergeSortedArrrays([0,3,4,31], [4,6,30]);

