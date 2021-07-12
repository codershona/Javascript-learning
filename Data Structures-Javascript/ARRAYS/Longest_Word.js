// Longest Word (CODERBYTE) (EASY)


function LongestWord(sen) {

  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
  
  let longest = ""

  var arr = sen.split(" ").forEach(word => {
      if(word.length > longest.length) longest = word;
  })

  return longest;

}
   
// keep this function call here 
LongestWord(readline());


// Or,

function LongestWord(sen) { 

  // code goes here  
  let output = '';
  sen.replace(/[^a-zA-Z ]/gi, '').split(' ').forEach(word => word.length > output.length ? output = word : null);
  return output;
   return sen; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));

