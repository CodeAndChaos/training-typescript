
export function singleNumber(nums: number[]): number {
    if (nums.length < 1) {
        throw new Error("No Items")
    }
    if (nums.length === 1) {
        return nums[0]
    }

    const existingNums = nums.sort();
    for (let i = 0; i < existingNums.length; i++) {
        if (nums[i+1] === undefined){
            return nums[i]
        }
        if (nums[i] === nums[i + 1]) {
            i += 1;
        } else {
            return nums[i];
        }
    }

    return 0;
};