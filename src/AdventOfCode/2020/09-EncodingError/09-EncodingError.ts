const isValidNumber = (num:number, data: number[]) => {
    const substractedData = data.map(val => num-val)
    return substractedData.some(val => data.includes(val))
    
}

export const findEncodingError = (inputData: string[], preamble=5) => {
    const data = inputData.map(val => parseInt(val, 10))
    return data.find((val, index) => {
        if (index < preamble){
            return false;
        } else {
            return !isValidNumber(val, data.slice(index - preamble, index) )
        }
        
    })
}

export const findContiguousSum = (num: number, inputData: number[], index=0) => {
    let sum = 0;
    let vals = []
    for (let i = index; i < inputData.length; i++){
        sum += inputData[i]
        vals.push(inputData[i])
        if (sum === num){
            return vals
        }
        if (sum > num){
            return findContiguousSum(num, inputData, index +1)
        }
    }
}