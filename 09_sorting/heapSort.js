const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function heapSort(array) {
    let heapSize = array.length;

    buildHeap(array);

    for (let i = heapSize - 1; i > 0; i--) {
        const temp = array[i];
        array[i] = array[0];
        array[0] = temp;

        heapSize--;

        maxHeapify(array, heapSize, 0);
    }

    return array;
}

function buildHeap(array) {
    let heapSize = array.length;

    for (let i = parseInt(heapSize / 2); i >= 0; i--) {
        maxHeapify(array, heapSize, i);
    }
}

function maxHeapify(array, heapSize, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < heapSize && array[left] > array[largest]) {
        largest = left;
    }

    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }

    if (largest != i) {
        const temp = array[largest];
        array[largest] = array[i];
        array[i] = temp;

        maxHeapify(array, heapSize, largest);
    }
}

const answer = heapSort(numbers);
console.log(answer);