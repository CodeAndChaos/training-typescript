interface Recipe {
    lang: string[]
    eng: string[]
}

export const parseInputString = (input: string): Recipe => {
    const [rawLang, rawEng] = input.split('(contains ')

    return {
        lang: rawLang.split(" ").filter(val => val != ""),
        eng: rawEng.replace(")", "").replace("\r", "").split(', ')
    }
}

export const prepareList = (input: string[]) => {
    const data = input.map(parseInputString)
    const rawTranslation: { [x: string]: string[][] } = {}
    data.forEach(val => val.eng.forEach(entry => {
        if (rawTranslation[entry]) {
            rawTranslation[entry].push(val.lang)
        } else {
            rawTranslation[entry] = [val.lang]
        }
    }))

    let unknownWords = data.flatMap(val => val.lang)

    let {translations, foundWords} = findTranslation(rawTranslation)
    let allergens = unknownWords.filter(word => !foundWords.includes(word))
    console.log( allergens)
    return [...new Set(allergens)].length + 1
}
 
const findTranslation = (rawTranslation: {[x:string]: string[][]}) => {
    let filteredOptions = new Map()
    for (let val of Object.entries(rawTranslation)) {
        const [key, value] = val;
        let allEntries = value.flatMap(item => item)
        let counter = countItemsInArray(allEntries)
        counter.forEach((count, counterValue ) => {
            if (count === value.length){
                let value = filteredOptions.get(key) ?? []
                filteredOptions.set(key, [...value, counterValue])
            }
        })
    }

    let translations = new Map();
    let foundWords: string[] = [];
    let lastRunSize = 0
    while(filteredOptions.size !== lastRunSize){
        filteredOptions.forEach((val:string[], key) => {
            const list = val.filter(word => !foundWords.includes(word))
            if (list.length === 1){
                foundWords.push(list[0])
                translations.set(key, list[0])
                filteredOptions.delete(key)
            } else {
                filteredOptions.set(key, list)
            }
        })
        lastRunSize = filteredOptions.size
    }
    console.log(filteredOptions)
    return {translations, foundWords}
 
}

const countItemsInArray = (data: string[]): Map<string, number> => {
    const counter = new Map()
    data.forEach(val => {
        let value = counter.get(val) ?? 0
        value += 1
        counter.set(val, value)
    })
    return counter
}