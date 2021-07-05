export const findPairs = (k: number, arr: number[]): number[][] => {
    let output:number[][] = []
    arr.forEach(firstParam => {
        const searchValue = k-firstParam;
        if (arr.includes(searchValue)){
            output.push([firstParam, searchValue])
        }
    })
    
    return output
}

export const findPairs2 = (k: number, arr: number[]): number[][] => {
    let output:number[][] = []
    for(let i = 0; i<arr.length;i++){
        const current = arr[i];
        const searchValue = k-current;
        for(let j = i; j<arr.length;j++){
            const secondParameter = arr[j];
            if (secondParameter === searchValue){
                output.push([current, searchValue])
            }
        }
    }
    
    return output
} 

 


export const findPairs3 = (k:number, arr: number[]): number[][] => {
    let firstIndex = 0
    let lastIndex = arr.length -1;
    const output:number[][]= []
    
    while(firstIndex < lastIndex){
        const firstValue = arr[firstIndex];
        const secondValue = arr[lastIndex];
        const sum = firstValue + secondValue;

        if (sum > k) {
            lastIndex -= 1;
        } 
        if (sum < k) {
            firstIndex += 1;
        }
        if (sum === k){
            output.push([firstValue, secondValue])
            firstIndex += 1;
            lastIndex -= 1;
        }
        
    }
    return output;
}