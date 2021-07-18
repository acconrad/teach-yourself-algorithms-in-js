export function binarySearch(arr: number[], target: number): number {
    if (!arr.length) return -1;
    if (arr.length === 1) return arr[0];
    var left = 0;
    var right = arr.length - 1;
    while (left !== right) {
        var mid = left + Math.floor(right-left/2); // mid = right >>> 1
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
