const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
    const len = array.length;
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        // Sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }

    return array;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(array, right, partitionIndex);

    return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];

    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function quickSortMine(array, left, right) {
    if (array.length <= 1) {
        return array;
    }

    let indexCounter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i - indexCounter] > array[right - indexCounter]) {
            array.push(array.splice(i - indexCounter, 1)[0]);
            indexCounter++;
        }
    }

    let leftArray = array.slice(left, right - indexCounter);
    let rightArray = array.slice(right - indexCounter + 1, array.length);

    return quickSort(leftArray, 0, leftArray.length - 1).concat(array[right - indexCounter]).concat(quickSort(rightArray, 0, rightArray.length - 1));
}


//Select first and last index as 2nd and 3rd parameters
const answer = quickSort(numbers, 0, numbers.length - 1);
console.log(answer);