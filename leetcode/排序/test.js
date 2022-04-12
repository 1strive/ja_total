const arr = [4, 3, 8, 2, 4, 4, 1]
const arr1 = [3, 1, 2, 4, 5]

function quicksort(arr) {
    if (arr.length == 0) {
        return [];
    }
    const left = []
    const right = []
    let pri = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pri) {
            left.push(arr[i])
        } else{
            right.push(arr[i])
        }
    }

    return quicksort(left).concat(pri, quicksort(right))
}

console.log(quicksort(arr));
console.log(quicksort(arr1));