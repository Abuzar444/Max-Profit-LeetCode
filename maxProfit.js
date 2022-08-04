const maxProfit = arr => {
    let max = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        let profit = arr[i] - min;
        max = Math.max(max, profit);
    }
    return max;
}

console.log(maxProfit([4, 1, 5, 7]));