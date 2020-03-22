module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        depth = 1;
      }
      else {  
        arr.forEach(i => {
          let item = 1;
          item += this.calculateDepth(i);
          if (item > depth) {
            depth = item;
          } 
        })
      }
    }
  return depth;
  }
}