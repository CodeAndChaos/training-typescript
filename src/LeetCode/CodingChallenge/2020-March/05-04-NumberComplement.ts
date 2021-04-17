/**
 * @param {number} num
 * @return {number}
 */
export var findComplement = function(num: number):number {
    const binaryConversion = num.toString(2);
    const reverse = binaryConversion.split('').map(val => val==="0" ? "1" : "0").join("");
    return parseInt(reverse, 2)
};

