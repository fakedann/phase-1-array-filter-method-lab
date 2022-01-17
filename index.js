// Code your solution here
function findMatching(drivers, drvr){
    return drivers.filter( element => drvr.toLowerCase() === element.toLowerCase());
}

function fuzzyMatch(drivers, letters){
  
    let matchingDrivers = drivers.filter(element => {
        let aux = element.substring(0,2);
        if (aux === letters){
            return element;
        }

    })
    return matchingDrivers;
}

function matchName(drivers, drvr){

    let matchingDrivers = drivers.filter(element => element['name'] === drvr)
    return matchingDrivers;
}