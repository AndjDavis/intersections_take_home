import { LaneController } from './lane.js';

// TODO: add lawngreen color to these cells.
const grassCoveredCorners = [
  ['A1', 'B1', 'A2', 'B2'],
  ['K1', 'L1', 'K2', 'L2'],
  ['A11', 'B11', 'A12', 'B12'],
  ['K11', 'L11', 'K12', 'L12']
]

const cellSize = '20px';

class Grid {
  constructor () {
    this.rows = 12
    this.columns = 12
    this.gridContainer = document.getElementById('grid-container');

    // Looked this up how to create a CSS grid
    this.gridContainer.style.gridTemplateColumns = `repeat(${this.cols}, ${cellSize})`;
    this.gridContainer.style.gridTemplateRows = `repeat(${this.rows}, ${cellSize})`;

    this.createGrid();
    this.laneController = new LaneController();
  }

  // TODO: Add lane borders to create street lanes
  createGrid() {
    for (let row = 1; row <= this.rows; row++) {
      for (let col = 1; col <= this.cols; col++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        // convert columns to letters, easier for my mind to visualize.
        // TODO: check capitolization
        const colLetter = String.fromCharCode(64 + col);
        const cellId = `${colLetter}${row}`;
        cell.id = cellId;

        this.gridContainer.appendChild(cell);
      }
    }
  }

  updateCellBackground(cellID, color) {
    const cell = document.getElementById(cellID);
    if (cell) {
      cell.style.backgroundColor = color;
    }
  }
}

export default Grid;
