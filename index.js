const returnFirstTwoDrivers = function(drivers){
  let array = [drivers[0],drivers[1]]
  return array
}

const returnLastTwoDrivers = function(drivers){
  let array = drivers.slice(-2)
  return array
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){
    return fare * num
  }
}

function fareDoubler(fare) {
  // return num * 2
  const doubler = createFareMultiplier(2)
  return doubler(fare)
}

function fareTripler(fare) {
  // return num * 3
  const trippler = createFareMultiplier(3)
  return trippler(fare)
}

const fetchSpecifiedDrivers = function(drivers,fn){
  return fn(drivers)
}