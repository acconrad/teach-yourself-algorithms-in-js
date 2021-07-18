function swap(arr: number[], leftIdx: number, rightIdx: number): number[] {
  const temp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = temp;
  return arr;
}

function partition(arr: number[], leftIdx: number, rightIdx: number): number {
  const pivot = arr[Math.floor(rightIdx - leftIdx / 2)]
  let left = leftIdx;
  let right = rightIdx;

  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left += 1;
    }
    while (arr[right] > arr[pivot]]) {
      right -= 1;
    }
    if (left <= right) {
      arr = swap(arr, left, right);
      left += 1;
      right -= 1;
    }
  }

  return left;
}

export function quicksort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
  if (arr.length <= 1) return arr;
  let idx = partition(arr, left, right);
  if (left < idx - 1) {
    arr = quicksort(arr, left, idx - 1);
  }
  if (idx < right) {
    arr = quicksort(arr, idx, right);
  }
  return arr;
}
