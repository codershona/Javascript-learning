// keys method without collision:

// keys()

keys() {
  if(!this.data.length) {
    return undefined;
  }
  let result = [];
  // loops through all the elements
  for (let i=0; i < this.data.length; i++) {
    // if this is not a empty memory cells
    if (this.data[i] && this.data[i].length) {
      // but also loop through all the potential collist
      if (this.data.length > 1) {
        for (let j = 0; j < this.data.[i].length; j++) {
           result.push(this.data[i] [j] [0])
        }
      } else {
        result.push(this.data[i][0])
      }
    }
  }
  return result;
}




