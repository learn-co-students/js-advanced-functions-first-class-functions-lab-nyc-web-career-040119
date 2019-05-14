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
  return quadruple = function(num){
    return num * 5
  }
}

function fareDoubler(num) {
  return num * 2
}

function fareTripler(num) {
  return num * 3
}

const fetchSpecifiedDrivers = function(drivers,fn){
  return fn(drivers)
}