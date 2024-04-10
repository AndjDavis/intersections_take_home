class SignalController {
  constructor (laneId, signalPosition, isLeftLane = false, isRightLane = false) {
    let signalType = Signal
    if (isLeftLane) {
      signalType = LeftSignal();
    } else if (isRightLane) {
      signalType = RightSignal();
    } else {
      throw new Error('Invalid signal type')
    }

    return new signalType(signalPosition, laneId);
  }

}

class Signal {
  constructor (signalPosition, laneId, starting_color_index = 0) {
    super();
    this.laneId = laneId;
    this.signalPosition = signalPosition;
    this.colors = ['red', 'yellow', 'green'];
    this.current_color_index = 0;
    this.current_color = this.colors[this.current_color_index]
  }

  updateCurrentColor() {
    this.current_color_index = (this.current_color_index + 1) % this.colors.length;
  }
}

class RightSignal extends Signal {
  constructor () {
    super();
    this.colors = null;
  }
}

class LeftSignal extends Signal {
  constructor () {
    super();
    this.colors = ['red', 'yellow', 'green', 'orange'];
  }
}

export { Signal, SignalController, RightSignal, LeftSignal };