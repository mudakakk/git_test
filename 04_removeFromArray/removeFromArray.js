const removeFromArray = function(arr, int1, int2, int3, int4, int5, int6) {
    const nums = (Array.from(arguments)).slice(1);
    for (const num of nums){
        while (arr.indexOf(num) !== -1){
            arr.splice(arr.indexOf(num), 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
