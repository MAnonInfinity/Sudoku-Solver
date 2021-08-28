import React, { useState } from 'react';
import checker from '../../checker';
import './sudoku-matrix-style.css';

function SudokuMatrix(theme) {
    const [mat, setMat] = useState(Array.from({ length: 9 }, v => Array.from({ length: 9 }, v => 0)));

    const handleChange = (i, j, e) => { 
        console.log(e);
        console.log(e.target.value);
        console.log(i, j);

        console.log(mat);
        let copy = [...mat];
        console.log("copy : ", copy);
        copy[i][j] = +e.target.value;
        console.log("copy : ", copy);
        setMat(copy);
        console.log(mat);
    
        DisplayMatrix();
        checker(mat);
    };

    const DisplayMatrix = () =>  {
        console.log("lollol");
        console.log("theme", theme);    
        var rows = mat.map(function (item, i){
            var entry = item.map(function (element, j) {
                return (
                    <td 
                        key={j} 
                        id={(element!==0)? 'user-filled' : ''} 
                        className={ 
                            ((j===3||j===6) && (i===3||i===6))?     
                                'block-column block-row': 
                                (j===3||j===6)? 
                                    'block-column': 
                                    (i===3||i===6)? 
                                        'block-row':''
                    }>
                            <input
                                type="number"
                                placeholder={element}
                                onChange={ (e) => {handleChange(i, j, e)} }
                            /> 
                    </td>
                );
            });
            return (
                <tr key={i}> {entry} </tr>
            );
        });
        return (
            <table className="table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            {DisplayMatrix()}
        </div>
    )
}

export default SudokuMatrix;