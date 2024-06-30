const removeFromArray = function (arr, ...theArgs) {
  
  for (const arg of theArgs) {
    let index = 0;
    while (index != -1) {
      index = arr.indexOf(arg);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
  }
  return arr;
};

// const removeFromArray = function (array, ...args) {
//     // create a new empty array
//     const newArray = [];
//     // use forEach to go through the array
//     array.forEach((item) => {
//       // push every element into the new array
//       // UNLESS it is included in the function arguments
//       // so we create a new array with every item, except those that should be removed
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     // and return that array
//     return newArray;
//   };

// Do not edit below this line
module.exports = removeFromArray;
