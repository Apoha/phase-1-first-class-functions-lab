// Code your solution in this file!

 //const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// const arrOfDrivers = {...drivers}


const returnFirstTwoDrivers = function(drivers){
    return (drivers.slice(0,2))
}


const  returnLastTwoDrivers = function(drivers){
    return (drivers.slice(-2))
}





const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];







// function createFareMultiplier(num){
   
//    return function fareMultiplier(num){
//        return num * num
//    }
// }



const createFareMultiplier = function(num) {
    return function (fare){
        return num * fare 
    }
}






function fareDoubler(fare){
 return fare*2
}



function fareTripler(fare){
    return fare*3
}





function selectDifferentDrivers(drivers, returnLastTwoDrivers){
return returnLastTwoDrivers(drivers).slice(0,2)
}