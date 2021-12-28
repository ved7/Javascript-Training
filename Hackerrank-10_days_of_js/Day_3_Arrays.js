function getSecondLargest(nums) {
    // Complete the function
    let size = nums.length;

    let res = nums[0];
    for (let i = 1; i < size; i++) {
        res = res < nums[i] ? nums[i] : res;
    }
    let secondMax = nums[0];
    for (let i = 1; i < size; i++) {
        if (secondMax < nums[i] && nums[i] < res) {
            secondMax = nums[i];
        }
    }
    return secondMax;
}
const array = [2, 3, 6, 6, 5];
const result = getSecondLargest(array);
console.log(result);