### Developer Note
I didn't get as far as I hoped, but the basic architecture is there (just took me longer than I thought it would). In my experiences, object-oriented programing has been the easiest to understand.

I tried to break it down into manager, controllers, and players.

The idea was to instantiate the Manager class with a command (didn't get to that), which would then create a grid on using CSS created by the Grid class.

The grid class creates a grid of 12x12, and assigns columns as letters, and rows by numbers, like an excel sheet. Each cell gets injectected into the html with using the column-row (ie 'A4') set as its id.
Making it for cars and traffic lights to update the correct cell.

The grid instance would then be broken down into lanes using a LaneController, which in turn creates individual lane class instances, grouped by direction of travel.

Each individual Lane instance would track...
  - the lane type (left, straight, right),
  - the starting position of the lane
  - Where cars should stop on reds (no stops for right turns!)
  - Create a 'traffic signal' for the lane
  - Create a 'route' that the lane takes (for the car to follow)

the Manager class then has a...
- car creation interval, which creates new car instances.
  - New cars are created with a lane instance passed into the contructor in order to check traffic lanes, routes, starting positions, and ending positions.
- grid refresh timer, to signal to the cars and traffic lights to update.
- stop light timer, to update the stop lights.
  - This needs a little more coordinating, which I haven't coded yet as I have to pair directions together, and account for left turns.
  - In the future, I think I would combine the grid refresh timer and stop light timer into one timer.


The car class would then update the CSS using the signal.
- Once a signal is received, the car would check the status of the traffic light if it was before its stopping point, and update its currentCell property with the next value in the route. 
- Once a car reaches the end of its route, it would get deleted.

The CSS and HTML is not fleshed out at all. I intended to keep it as simple as possible, and update cell backgrounds colors to mark where cars and traffic signals are located.

And now that I'm writing it out, I have a lot more to refactor, and a lot more to clean upm but I'm already late turning this in. 

Thank you!

