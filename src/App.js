import './App.css';
import SudokuMatrix from './components/sudoku-matrix/sudoku-matrix-component';
import DarkMode from './components/dark-mode/dark-mode-component'

function App() {
  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      {/* <DarkMode className='dark-mode'/> */}
      <div className="matrix">
        <SudokuMatrix/>
      </div>
    </div>
  );
}

export default App;
