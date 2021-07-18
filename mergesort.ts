function merge(leftArr: number[], rightArr: number[]): number[] {
  let mergedArr: number[] = [];

  // throw in the lesser of the two items
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      mergedArr.push(leftArr.shift());
    } else {
      mergedArr.push(rightArr.shift());
    }
  }

  // throw in the remainder of the larger array
  return [...mergedArr, ...leftArr, ...rightArr];
}

export function mergesort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(
    mergesort(arr.slice(0, mid)),
    mergesort(arr.slice(mid + 1, arr.length - 1))
  );
}
