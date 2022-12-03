const fixedValues = [
    "bob",
    "alice"
] as const


type fixedValuesIndex = keyof typeof fixedValues;

const accessFixedValue = (index: fixedValuesIndex) => {
    return fixedValues[index]
}