// array = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

function createFareMultiplier(integer){
  return function(fare){
    return integer * fare
  }
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = function(integer){
  return createFareMultiplier(integer)(2)
}

const fareTripler = function(integer){
  return createFareMultiplier(integer)(3)
}

function fetchSpecifiedDrivers(drivers, driverFunction){
  return driverFunction(drivers)
}
