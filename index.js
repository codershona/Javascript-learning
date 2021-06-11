let user = {
  age: 25,
  name: "Jenny",
  magic: true,
  scream: function() {
    console.log('learning hashtables');
  }
}

user.age // O(1)
user.spell = 'learning to codes are interesting'; // O(1)
//user
user.scream(); // O(1)

// O(n/k)
