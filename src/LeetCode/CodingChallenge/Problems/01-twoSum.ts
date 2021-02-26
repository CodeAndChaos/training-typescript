
export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        const index = nums.slice(i + 1, nums.length).findIndex((val) => target === nums[i] + val)
        if (index !== -1) {
            return [i, i + index + 1]
        }
    }
    return [];
};

