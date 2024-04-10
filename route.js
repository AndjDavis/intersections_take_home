// TODO: turn this into an algorithm that generates the route based on the starting point and the end point
const routeMap = {
    'C1': ['C1', 'C2', 'C3', 'B3', 'B2'],
    'D1': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12'],
    'E1': ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12'],
    'F1': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'G7', 'H7', 'I7', 'J7', 'K7', 'L7'],
    'L3': ['L3', 'K3', 'J3', 'J2', 'J1'],
    'L4': ['L4', 'K4', 'J4', 'I4', 'H4', 'G4', 'F4', 'E4', 'D4', 'C4', 'B4', 'A4'],
    'L5': ['L5', 'K5', 'J5', 'I5', 'H5', 'G5', 'F5', 'E5', 'D5', 'C5', 'B5', 'A5'],
    'L6': ['L6', 'K6', 'J6', 'I6', 'H6', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
    'G12': ['G12', 'G11', 'G10', 'G9', 'G8', 'G7', 'F7', 'E6', 'D6', 'C6', 'B6', 'A6'],
    'H12': ['H12', 'H11', 'H10', 'H9', 'H8', 'H7', 'H6', 'H5', 'H4', 'H3', 'H2', 'H1'],
    'I12': ['I12', 'I11', 'I10', 'I9', 'I8', 'I7', 'I6', 'I5', 'I4', 'I3', 'I2', 'I1'],
    'J12': ['J12', 'J11', 'J10', 'K10', 'L10'],
    'A7': ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'G6', 'G5', 'G4', 'G3', 'G2', 'G1'],
    'A8': ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'K8', 'L8'],
    'A9': ['A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9', 'K9', 'L9'],
    'A10': ['A10', 'B10', 'C10', 'C11', 'C12'],
};


class Route {
  constructor(starting_point) {
    this.starting_point = starting_point;
    const route = routeMap[starting_point];
    this.route = route;
    this.end_point = route[route.length - 1];
  }
};

export { Route }