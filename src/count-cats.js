module.exports = function countCats(matrix) {
  return matrix.reduce((cats, i) => {
    if (Array.isArray(i))
      cats += countCats(i);
    else if (i === "^^")
      cats ++;
    return cats;
  }, 0);
}
