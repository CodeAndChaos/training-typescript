export const createBoard = (data: string[]): string[][] => {
    return data.map(val => val.split(''));
}

export const applyRulesForPosition = (position: { x: number, y: number }, board: string[][]) => {

    let emptySeats = 0;
    let takenSeats = 0;
    for (let i = -1; i < 2; i++) {
        if (board[position.x + i] === undefined) {
            continue;
        }
        for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            let value = board[position.x + i][position.y + j]
            if (value === "L") {
                emptySeats++;
            }
            if (value === "#") {
                takenSeats++
            }
        }
    }
    const currentSeat = board[position.x][position.y]
    if (currentSeat === "L" && takenSeats === 0) {
        return "#";
    }
    if (currentSeat === "#" && takenSeats >= 4) {
        return 'L';
    }
    return currentSeat;
}

export const applyRulesForPosition2 = (position: { x: number, y: number }, board: string[][]) => {

    let emptySeats = 0;
    let takenSeats = 0;
    for (let i = -1; i < 2; i++) {
        if (board[position.x + i] === undefined) {
            continue;
        }
        for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            let value = findSeatInDirection(position, {x: i, y:j}, board)
            if (value === "L") {
                emptySeats++;
            }
            if (value === "#") {
                takenSeats++
            }
        }
    }
    const currentSeat = board[position.x][position.y]
    if (currentSeat === "L" && takenSeats === 0) {
        return "#";
    }
    if (currentSeat === "#" && takenSeats >= 5) {
        return 'L';
    }
    return currentSeat;
}

const findSeatInDirection = (position: { x: number, y: number }, direction: { x: number, y: number }, board: string[][]): string => {
    if (board[position.x + direction.x] === undefined || board[position.x + direction.x][position.y + direction.y] === undefined) {
        return '.'
    }
    const seat = board[position.x + direction.x][position.y + direction.y]

    if (seat === '.') {
        let x = (direction.x === 0) ? 0 : direction.x + direction.x / Math.abs(direction.x)
        let y = (direction.y === 0) ? 0 : direction.y + direction.y / Math.abs(direction.y)
        return findSeatInDirection(position, { x, y }, board)
    } else {
        return seat;
    }
}

export const changeStateOfBoard = (board: string[][], alternateRules = false): string[][] => {
    let newBoard: string[][] = []
    for (let i = 0; i < board.length; i++) {
        newBoard[i] = []
        for (let j = 0; j < board[i].length; j++) {
            if (alternateRules){
                newBoard[i][j] = applyRulesForPosition2({ x: i, y: j }, board)
            } else {
                newBoard[i][j] = applyRulesForPosition({ x: i, y: j }, board)
            }
        }
    }
    return newBoard
}

export const countSeats = (board: string[][], seat = "#"): number => {
    let countSeats = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === seat) {
                countSeats++
            }
        }
    }
    return countSeats
}

export const simulateSeating = (board: string[][], lastRun = -1, alternateRules= false): number => {
    const newBoard = changeStateOfBoard(board, alternateRules)
    const seatCount = countSeats(newBoard)
    if (seatCount === lastRun) {
        return seatCount
    } else {
        return simulateSeating(newBoard, seatCount, alternateRules)
    }

}