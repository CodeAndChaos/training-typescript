const hasRequiredFields = (data: string) => {
    const requiredFields = ['byr:', "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"]
    return requiredFields.filter(val => data.indexOf(val) === -1).length === 0;
}

const isValidPassport = (data: string) => {
    return hasRequiredFields(data) && hasValidData(data)
}

export const processBatchPasswordData = (data: string[]) => {
    return data.filter(val => hasRequiredFields(val)).length
}

export const processBatchPasswordData2 = (data: string[]) => {
    return data.filter(val => isValidPassport(val)).length
}

const inRange = (input: number, min: number, max: number) => {
    return min <= input && input <= max;
}

const hasValidData = (data: string) => {
    const fieldValidationMap = {
        byr: (str: string) => inRange(parseInt(str, 10), 1920, 2002),
        iyr: (str: string) => inRange(parseInt(str, 10), 2010, 2020),
        eyr: (str: string) => inRange(parseInt(str, 10), 2020, 2030),
        hgt: (str: string) => {
            const match = str.match(/(\d*)(in|cm)/)
            if (match) {
                const [, val, unit] = match;
                const value = parseInt(val, 10)
                if (unit === 'cm') {
                    return inRange(value, 150, 193)
                }
                if (unit === "in") {
                    return inRange(value, 59, 76)
                }
                return false
            } else {
                return false
            }
            return false
        },
        hcl: (str: string) => /#(\d|[a-f]){6}/.test(str),
        ecl: (str: string) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(str),
        pid: (str: string) => /^\d{9}$/.test(str),
        cid: (str: string) => true
    }
    const fields = data.split(" ").filter(val => val.length);
    return fields.filter(val => {
        const [field, value] = val.split(":")
        // @ts-ignore
        return !fieldValidationMap[field](value)
    }).length === 0
}


