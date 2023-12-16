const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function radixSort(array) {
    let maxDigitCount = mostDigits(array);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]

        for (let i = 0; i < array.length; i++) {
            let digit = getDigit(array[i], k);

            digitBuckets[digit].push(array[i]);
        }
        // New order after each loop
        array = [].concat(...digitBuckets)
    }

    return array;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    }

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

const answer = radixSort(numbers);
console.log(answer);