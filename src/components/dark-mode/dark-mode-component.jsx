import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const darkTheme = {
    backgroundColor: '#333333',
    color: 'white',
    userFilledCellColor: '#808080'
}
const lightTheme = {
    backgroundColor: 'white',
    color: 'black',
    userFilledCellColor: '#E0E0E0'
}

function changeTheme(theme){
    let userFilledCell = document.getElementById('user-filled');
    if (theme === 'light'){  // if light, turn to dark
            document.body.style.backgroundColor = darkTheme.backgroundColor;
            document.body.style.color = darkTheme.color;
            if (userFilledCell) document.getElementById('user-filled').style.backgroundColor = darkTheme.userFilledCellColor;
            theme = 'dark';
    }
    else{  // if dark, turn to light
        document.body.style.backgroundColor = lightTheme.backgroundColor;
        document.body.style.color = lightTheme.color;
        if (userFilledCell) document.getElementById('user-filled').style.backgroundColor = lightTheme.userFilledCellColor;
        theme = 'light';
    }
}

function DarkMode(theme) {
    return (
        <div>
            <Brightness4Icon onClick={changeTheme(theme)} fontSize="large"/>
        </div>
    )
}

export default DarkMode;
