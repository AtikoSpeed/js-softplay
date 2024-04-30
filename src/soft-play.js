// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
let totalAdults = 0
let totalChildren = 0
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    totalAdults += numAdults
    children += numChildren
    totalChildren += numChildren
    return true
  } else {
    return false
  }
}
function leave(numAdults, numChildren) {
  if (
    numAdults >= numChildren &&
    numAdults <= children &&
    numAdults <= adults &&
    numChildren <= children &&
    adults - numAdults >= children - numChildren
  ) {
    adults -= numAdults
    children -= numChildren
    return true
  } else {
    return false
  }
}
const totalObject = { adults: 0, children: 0 }
function total() {
  totalObject.adults = totalAdults
  totalObject.children = totalChildren
  return totalObject
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
