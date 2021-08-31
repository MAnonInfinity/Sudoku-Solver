import React, { useState } from 'react';
import isValid from '../../checker';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sudoku-matrix-style.css';

function SudokuMatrix(theme) {
    // states
    const [mat, setMat] = useState(Array.from({ length: 9 }, v => Array.from({ length: 9 }, v => 0)));
    const [validOrNot, setValid] = useState("Valid Sudoku");

    const DisplayMatrix = () =>  {
        var rows = mat.map(function (item, i){
            var entry = item.map(function (element, j) {
                return (
                    <td 
                        key={j} 
                        id={(element!==0)? 'filled' : ''} 
                        className={ 
                            ((j===3||j===6) && (i===3||i===6))?     
                                'block-column block-row': 
                                (j===3||j===6)? 
                                    'block-column': 
                                    (i===3||i===6)? 
                                        'block-row':''
                    }>
                            <input
                                id='user-input'
                                type="number"
                                placeholder={element}
                                onChange={ (e) => {handleMatrixChange(i, j, e)} }
                            /> 
                    </td>
                );
            });
            return (
                <tr key={i}>{entry}</tr>
            );
        });
        return (
            <table className="sudoku-table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
    
    const handleMatrixChange = (i, j, e) => { 
        let copy = [...mat];
        copy[i][j] = +e.target.value;
        setMat(copy);
    
        DisplayMatrix();

        if (!isValid(mat)){  // if sudoku is not valid
            // to disble the 'solve' button
            document.getElementById('solve').disabled = true;
            document.getElementById('solve').dispatchEvent = 'click';
            document.getElementById('solve').classList.add('dont-solve');

            // to change the note
            setValid("Invalid Sudoku");
            document.getElementById('valid-not-valid').classList.add('invalid-sudoku');

            setMat(mat);
        }
        else{  // if sudoku is valid
            // to enable the 'solve' button
            document.getElementById('solve').disabled = false;
            document.getElementById('solve').classList.remove('dont-solve');

            // for the note
            setValid("Valid Sudoku");
            document.getElementById('valid-not-valid').classList.remove('invalid-sudoku');
            document.getElementById('valid-not-valid').classList.add('valid-sudoku');
        }
    };

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

    const solve = () => {
        let copy = [...mat];
        if (solveSudoku(copy))
            setMat(copy);
        DisplayMatrix();
    }

    return (
        <div>
            {DisplayMatrix()}
            <div id='valid-not-valid'>
                <em id='valid-or-not' className={isValid(mat)? 'valid-sudoku':'invalid-sudoku'}>{validOrNot}</em>
            </div>
            <div className='solve-reset'>
                <button id='solve' onClick={ solve }>Solve</button>
            </div>
        </div>
    )
}   

export default SudokuMatrix;