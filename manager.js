// import grid from 'grid.js'
import Grid from './grid.js';
import Car from './car.js';

// Master controller
// Program instantiates the Manager class
// Creates the grid
// - 12x12 grid
// - creates car instances to add to the grid

class Manager {
  constructor() {
    this.grid = new Grid();
    this.laneController = this.grid.laneController;
    this.update = setInterval(() => this.refreshGrid(), 500);
    this.stop_light_timer = setInterval(() => this.updateStopLights(), 4000);
    this.create_car_timer = setInterval(() => this.createCar(), 1000);
    this.cars = [];
  }

  getRandomLane() {
    return this.laneController.lanes[Math.floor(Math.random() * this.getLanes().length)]
  }

  updateSignals() {
    return this.laneController.lanes.forEach(lane => lane.signal.updateCurrentColor());
  }

  // Set to update every 500ms, this should get passed to all the cars, which should advance one on their route.
  refreshGrid() {
    // return ;
  }

  createCar() {
    const lane = this.getRandomLane();
    const car = new Car(lane, );
    this.cars.push(car);
    return car;
  }
}
  