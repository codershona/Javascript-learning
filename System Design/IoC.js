// IOC 
// Inversion of Control (IoC)
// IoC inverts the flow of control as compared to traditional control flow.
// PSEUDO CODE:

function TextEditor(SpellChecker) {
   this.SpellChecker = SpellChecker;
}

function TextEditor2(spellChecker2) {
   this.spellChecker2 = spellChecker2;
}

// Creating an object

var spoll = new TextEditor("Zuan");
var spoll2 = new TextEditor2("Zuan2");

console.log(spoll.SpellChecker);
console.log(spoll2.spellChecker2); //Zuan