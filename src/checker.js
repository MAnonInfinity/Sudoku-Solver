export default function isValid(mat){
    let s = new Set();
        
    // checking rowwise
    for (let row=0;row<9; row++){ 
        s.clear();
        for (let column=0;column<9;column++){
            if (mat[row][column]!==0){
                if (!Number.isInteger(mat[row][column]) || s.has(mat[row][column]) || mat[row][column]>9 || mat[row][column]<=0)
                    return false;
                else
                    s.add(mat[row][column]);
            }
        }
    }
    
    // checking columnwise
    for (let column=0;column<9;column++){
        s.clear();
        for (let row=0;row<9;row++){
            if (mat[row][column]!==0){
                if (s.has(mat[row][column]))
                    return false;
                else
                    s.add(mat[row][column]);
            }
        }
    }
    
    // checking in 3X3 blocks
    for (let c=0;c<9;c+=3){
        for (let i=0;i<9;i++){
            if (i%3===0)
                s.clear();
            for (let j=c;j<c+3;j++){
                if (mat[i][j]!==0){
                    if (s.has(mat[i][j]))
                        return false;
                    else
                        s.add(mat[i][j]);
                }
            }
        }
    }
    
    return true;
}