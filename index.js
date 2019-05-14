const returnFirstTwoDrivers = (arr) => {return [arr[0], arr[1]]}
const returnLastTwoDrivers = (arr) => {return [arr[arr.length-2], arr[arr.length-1]]}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function (fare) {
    return int * fare;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arr, func) {
  return func(arr);
}
