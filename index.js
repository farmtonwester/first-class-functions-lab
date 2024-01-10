// Code your solution in this file!
const returnFirstTwoDrivers = function(names) {
    return names.slice(0,2)
};

const returnLastTwoDrivers = function(names) {
    return names.slice(-2)
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare){
        return (fare * integer)
    }
};
const fareDoubler = createFareMultiplier(2) 
    
//console.log(fareDoubler(10))

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, cb) {
    return cb(drivers)
};