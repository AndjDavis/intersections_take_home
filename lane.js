import { SignalController } from './signal.js';
import { Route } from './route.js';

// lane group names
const northDirection = 'North';
const southDirection = 'South';
const eastDirection = 'East';
const westDirection = 'West';
const laneGroupNames = [northDirection, southDirection, eastDirection, westDirection];

// Using a range, this is assuming the grid will always be 12x12
const laneGroupInfo = {
  [eastDirection]: {
    startingLocations: ['A7', 'A8', 'A9', 'A10'],
    stoppingLocations: ['C7', 'C8', 'C9',],
    signalLocations: ['J7', 'J8', 'J9'],
  },
  [northDirection]: {
    startingLocations: ['G12', 'H12', 'I12', 'J12'],
    stoppingLocations: ['G10', 'H10', 'I10'],
    signalLocations: ['G3', 'H3', 'I3'],
  },
  [southDirection]: {
    startingLocations: ['C1', 'D1', 'E1', 'F1'],
    signalLocations: ['D10', 'E10', 'F10'],
    stoppingLocations: ['D3', 'E3', 'F3'],
    right_lane: 'C1',
    left_lane: 'F1'
  },
  [westDirection]: {
    startingLocations: ['L3', 'L4', 'L5', 'L6'],
    stoppingLocations: ['J4', 'J5', 'J6'],
    signalLocations: ['C4', 'C5', 'C6'],
  },
}

class LaneController {
  constructor () {
    this.createLanes();
    this.lanes = []
  }

  createLanes() {
    laneGroupNames.forEach(groupName => this.addLane(groupName));
  }

  addLane(groupName) {
    const { startingLocations, stoppingLocations, signalLocations } = laneGroupInfo[groupName];
    for (let i = 0; i < startingLocations.length; i++) {
      const startingPosition = startingLocations[i] || null;
      const stopOnRedPosition = stoppingLocations[i] || null;
      const signalPosition = signalLocations[i] || null;
      const isLeftLane = i === 0;
      const isRightLane = i === startingLocations.length - 1;
      const lane = new Lane(groupName, startingPosition, stopOnRedPosition, signalPosition, isLeftLane, isRightLane);
      this.lanes.push(lane);
    }
  }
}

class Lane {
  constructor (groupName, startingCell, stopOnRedCell = null, signalPosition = null, isLeftLane = false, isRightLane = false) {
    this.startingCell = startingCell;
    this.group = groupName;
    this.stopOnRedCell = stopOnRedCell;
    this.id = `${this.group}-${this.startingCell}`;
    this.signalController = new SignalController(this.id, signalPosition, isLeftLane, isRightLane);
    this.route = new Route(startingCell);
  }
}

export { LaneController, Lane }
