import React, { useState } from 'react'

const DisplayMatrix = () =>  {
    var rows = this.state.mat.map(function (item, i) {
        var entry = item.map(function (element, j) {
        return (
            <td
            key={j}
            id={element !== 0 ? "user-filled" : ""}
            className={
                (j === 3 || j === 6) && (i === 3 || i === 6)
                ? "block-column block-row"
                : j === 3 || j === 6
                ? "block-column"
                : i === 3 || i === 6
                ? "block-row"
                : ""
            }
            >
            <input type="number" placeholder={element} />
            </td>
        );
        });
        return <tr key={i}> {entry} </tr>;
    });
    return (
        <table className="table">
        <tbody>{rows}</tbody>
        </table>
    );
}

function Hehe() {
    const [mat] = useState(new Array(9).fill(new Array(9).fill(1)));
    return (
        <div>
            {DisplayMatrix}
        </div>
    )
}

export default Hehe;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sudoku-matrix-style.css'; 

export class SudokuMatrix extends React.Component {
    constructor(){
        super();

        this.state = {
            mat: new Array(9).fill(new Array(9).fill(1))
        };
    }

    handleChange(e) {
        console.log(e.nativeEvent.data);
        for (let a=0;a<9;a++)
            for (let b=0;b<9; b++)
                console.log(this.state.mat[a][b]);
    }

    displayMat(){
        var rows = this.state.mat.map(function (item, i){
            var entry = item.map(function (element, j) {
                return (
                    <td 
                        key={j} 
                        id={(element!==0)? 'user-filled': ''} 
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
                                onChange={ (e) => {this.handleChange(e)} }
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

    render() {
        return (
            <div>
              {this.displayMat()}
            </div>
        )
    }
}

export default SudokuMatrix;


.table{
    width: 40px;
    margin-left: auto;
    margin-right: auto;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    border-collapse: collapse;
    border-spacing: 0;
}
td {
    width: 33%; 
    border: none;
}
.block-column {
    border-left: 2px solid black;
}
.block-row {
    border-top: 2px solid black;
}

#user-filled{
    background-color:   #E0E0E0;
}

input {
    width: 35px;
    font-size: 1.3rem;
    border:none;
    background-color:transparent;
    text-align: center;
}
input::placeholder{
    text-align: center;
}
input[type=number]::-webkit-inner-spin-button,  /*removing the arrows for input type: number*/
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

const DisplayMatrix = (mat) =>  {
    var rows = mat.map(function (item, i){
        var entry = item.map(function (element, j) {
            return (
                <td 
                    key={j} 
                    id={(element!==0)? 'user-filled': ''} 
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
                            // onChange={ (e) => {this.handleChange(e)} }
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