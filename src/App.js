import './App.css';
import SudokuMatrix from './components/sudoku-matrix/sudoku-matrix-component';
// import DarkMode from './components/dark-mode/dark-mode-component'

function App() {
  return (
    <div className="App">
      <a href='https://github.com/MAnonInfinity/Sudoku-Solver' target='blank'><h1>Sudoku Solver</h1></a>
      {/* <DarkMode className='dark-mode'/> */}
      <div className="matrix">
        <SudokuMatrix/>
      </div>
      <p>Made with ❤️ by MAnon</p>
    </div>
  );
}

export default App;
