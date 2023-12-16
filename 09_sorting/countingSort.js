const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function countingSort(arr, max, min) {
    const count = [];

    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    const sortedArr = [];

    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }

    return sortedArr;
}

const answer = countingSort(numbers, Math.max(...numbers), Math.min(...numbers));
console.log(answer);