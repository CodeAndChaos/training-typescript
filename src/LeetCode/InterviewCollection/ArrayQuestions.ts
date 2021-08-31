export function removeDuplicates(nums: number[]): number {
    let current = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[current] = nums[i];
            current++;
        }
    }

    return current;
};


// Task 5 Find the unique number in the array of duplicates
export const singleNumber = (nums: number[]): number => {
    return nums.reduce((a, b) => a ^ b);
};

// Task 6
export const intersect = (nums1: number[], nums2: number[]): number[] => {
    const map = new Map<number, number>();
    const result: number[] = [];
    for (const num of nums1) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }
    for (const num of nums2) {
        let val = map.get(num) ?? 0;
        if (val > 0) {
            result.push(num);
            map.set(num, val - 1);
        }
    }
    return result;

};
