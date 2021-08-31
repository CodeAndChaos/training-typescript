export function addStrings(num1: string, num2: string): string {
    let largerNumber = Math.max(num1.length, num2.length);
    const numMap:{[x:string]: number} = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9
    }
    let carryover = 0;
    let output = "";
    let reversed = [...num1].reverse();
    let reversed2 = [...num2].reverse();
    for (let i = 0;i<largerNumber;i++){
        const first = numMap[reversed[i]] || 0
        const second = numMap[reversed2[i]] || 0
        
        const sum = first + second + carryover;
 
        if (sum >= 10){
            carryover = 1
        } else {
            carryover = 0;
        }
        output = `${sum % 10}${output}`
    }
    if (carryover === 1){
        output = `${carryover}${output}`
    }
    return output;
};