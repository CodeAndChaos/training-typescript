export function removeDuplicates(s: string, k: number): string {
    let out = s;
    [...s].forEach((val) => {
        const replace = `${val}{${k}}`
        const regex = new RegExp(replace, "g")
        out = out.replace(regex, "")
    })
    return out;
};