
const readFolder = (folder: string, fileMap: Map<string, string[]>) => {
    const [root, ...files] =  folder.split(" ")
    files.forEach(file => {
        const [path, value] = file.split("(")
        const fileMapEntry = fileMap.get(value) ?? [];
        fileMap.set(value, [...fileMapEntry, `${root}/${path}`])
    })
    return fileMap;
}

export function findDuplicate(paths: string[]): string[][] {
    let fileMap = new Map<string, string[]>()
    paths.forEach(val => readFolder(val, fileMap))
    return [...fileMap.values()].filter(val => val.length > 1) 
}