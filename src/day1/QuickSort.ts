function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let index = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            index++;
            const tmp = arr[i];

            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    return index;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
