// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(arg){
  return function (fare){
    return fare * arg
  }
}

const fareDoubler = function(number){
  let fare = number * 2
  return fare
}

const fareTripler = function(number){
  let fare = number * 3
  return fare
}

const fetchSpecifiedDrivers = function(arr, fn){
  return fn(arr)
}
