/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const objNums = {};

    for (let intNum of nums) {
        if (objNums.hasOwnProperty(intNum)) {
            return true;
        }

        objNums[intNum] = true;
    }

    return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));