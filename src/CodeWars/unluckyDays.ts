const unluckyDays = (year: number): number => {
    const FRIDAY = 5;
    const UNLUCKY_DAY = 13

    let count = 0;
    for (let month = 1; month < 13; month++) {
        const date = new Date(year, month, UNLUCKY_DAY)
        if (date.getDay() === FRIDAY) {
            count++;
        }
    }
    return count;
}

const result = unluckyDays(2015);
console.log(result)