export const isValidSudoku = (board: string[][]): boolean => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = board[i][j];
            if (char !== '.') {
                if (!isValid(board, i, j, char)) return false;
            }
        }
    }
    return true;
}

const isValid = (board: string[][], row: number, col: number, char: string): boolean => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === char && i !== row) return false;
        if (board[row][i] === char && i !== col) return false;
    }
    const rowStart = Math.floor(row / 3) * 3; 
    const colStart = Math.floor(col / 3) * 3 ;
    for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
            console.log(board[i][j]);
            if (board[i][j] === char && i !== row && j !== col) return false;
        }
    }
    return true;
}