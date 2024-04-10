// 'Group' should come from the lane class?
const colors = []
class Car {
  constructor (lane) {
    this.inMotion = false;
    this.color = null;
    this.lane = lane;
    this.route = this.lane.route;
    this.signal = this.lane.signalController;
    this.currentCell = this.route.startingCell;
  }

  // TODO: T
  move() {
    if (this.signal.current_color === 'red') {
      const nextCell = this.route.nextCell(this.currentCell);
      if (nextCell) {
        this.lane.grid.updateCellBackground(this.currentCell, 'white');
        this.lane.grid.updateCellBackground(nextCell, this.color);
        this.currentCell = nextCell;
      } else {
        this.inMotion = false;
      }
    }
  }
}