interface CommandDirective {
    command: string;
    value: number;
    visited: boolean;
}

class CommandError extends Error {
    constructor(public message: string, public value: number) {
        super(message)
    }
}

const readCommand = (txt: string) => {
    const [command, rawValue] = txt.split(" ")
    return { command, value: parseInt(rawValue), visited: false }
}

const executeProgram = (commands: CommandDirective[], currentCommandIndex: number = 0, acc: number = 0): number => {
    
    if (commands.length === currentCommandIndex) {
        return acc
    }
    
    const { command, value, visited } = commands[currentCommandIndex]
    
    if (visited) {
        
        throw new CommandError("Infinite loop", acc)
    }
    commands[currentCommandIndex].visited = true;

    const commandMap: { [x: string]: () => number } = {
        nop: () => executeProgram(commands, currentCommandIndex + 1, acc),
        acc: () => executeProgram(commands, currentCommandIndex + 1, acc + value),
        jmp: () => executeProgram(commands, currentCommandIndex + value, acc)
    }
    return commandMap[command]();
}

export const handheldHaltingPart1 = (input: string[]): number => {
    const commands = input.map(readCommand)

    try {
        const value = executeProgram(commands);
        return value;
    } catch(e){
        return e.value
    }
    return 0;
}

const autoCorrectingProgram = (commands: CommandDirective[], currentIndex=0): number => {
    const currentCommand = commands[currentIndex];
    
    if(currentCommand === undefined){
        throw Error("No Solution Found")
    }
    const correctedCommands = commands.map(val => ({...val, visited: false}))
    if (currentCommand.command === "nop"){
        correctedCommands[currentIndex] = {...currentCommand, command: "jmp"}
    } else if (currentCommand.command === "jmp"){
        correctedCommands[currentIndex] = {...currentCommand, command: "nop"}
    } else {
        return autoCorrectingProgram(commands, currentIndex + 1)
    }
    let value
    try {
        value = executeProgram(correctedCommands);
    } catch(e){
        return autoCorrectingProgram(commands, currentIndex + 1)
    }
    return value;
}

export const handheldHaltingPart2 = (input:string[]): number => {
    const commands = input.map(readCommand)
    const value = autoCorrectingProgram(commands);
    return value;
}