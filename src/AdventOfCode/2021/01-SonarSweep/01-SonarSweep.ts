import { stringArrayToNumberArray } from "../../utils/arrayUtils"

const countIncreasedValues = (numbers: number[]) => {
    return numbers.reduce((acc, curr, currentIndex) => {
        if (currentIndex === 0) {
            return acc
        }
        return numbers[currentIndex - 1] < curr ? acc + 1 : acc
    }, 0)
}

export const howManyIncreasedValues = (input: string[]) => {
    const numbers = stringArrayToNumberArray(input)
    return countIncreasedValues(numbers)
}

export const threeSlidingWindowMeasurements = (input: string[]) => {
    const numbers = stringArrayToNumberArray(input)
    const addMeasurement = numbers.map((value, index) => {
        if (index < 2) {
            return 0
        }
        return value + numbers[index - 2] + numbers[index - 1]
    })
    addMeasurement.splice(0, 2);
    return countIncreasedValues(addMeasurement)
}