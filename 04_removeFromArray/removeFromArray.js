const removeFromArray = function(array, index) {
    array.splice(index-1,1);
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;
