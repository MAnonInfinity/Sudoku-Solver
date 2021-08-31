function isSafe(row, column, num, mat){
    for (let i=row, j=0; j<9; j++)
        if (mat[i][j] === num)
            return false;
    for (let i=0, j=column; i<9; i++)
        if (mat[i][j] === num)
            return false;
    for (let i=3*Math.floor(row/3), ci=0; ci<3; i++, ci++){
        for (let j=3*Math.floor(column/3), cj=0; cj<3; cj++, j++)
            if (mat[i][j] === num && i!==row && j!==column)
                return false;
    }
    return true;
}

const solveSudoku = (copy) => {
    for (let row=0;row<9;row++) {
        for (let column=0;column<9;column++){
            if (copy[row][column] === 0){
                for (let num=1;num<=9;num++){
                    if (isSafe(row, column, num, copy)){
                        copy[row][column] = num;
                        if (solveSudoku(copy))
                            return true;
                        else
                            copy[row][column] = 0; 
                    }
                }
                return false;
            }
        }
    }
            
    return true;
}

export const solveIt = (copy) => {
    if (solveSudoku(copy))
        return copy;
}