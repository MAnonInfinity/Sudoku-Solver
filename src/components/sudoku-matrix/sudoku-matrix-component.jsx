import React, { useState } from 'react';
import isValid from '../../checker';
import { solveIt } from '../../solver';
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

    const solve = () => {
        let copy = [...mat];
        setMat(solveIt(copy));
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