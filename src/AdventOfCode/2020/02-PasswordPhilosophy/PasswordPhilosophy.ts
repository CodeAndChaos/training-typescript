interface PasswordRule { min: number, max: number, char: string, pass: string }

export const parsePasswordInput = (rule: string): PasswordRule => {
    const match = rule.match(/(\d+)-(\d+) (\w{1}): (.*)/)
    if (match) {
        const [, min, max, char, pass] = match;
        return {
            min: parseInt(min, 10), max: parseInt(max, 10), char, pass
        }
    } else {
        throw new Error(`Not a valid input ${rule}`)
    }

}

export const verifyPasswordEntry = ({ pass, min, max, char }: PasswordRule) => {
    const charCount = pass.split("").filter(val => val === char).length
    return (charCount >= min && charCount <= max)
}

export const verifyPasswordEntryAlternative = ({ pass, min, max, char }: PasswordRule) => {
    return (pass[min - 1] === char || pass[max - 1] === char) && pass[min - 1] !== pass[max - 1]
}

export const validPasswords = (entries: string[], fun: (rule: PasswordRule) => boolean) => {
    return entries.map(val => parsePasswordInput(val)).filter(val => fun(val))
}