/**** LOOPING OVER KEY/VALUE PAIRS: PRACTICE ****/

/*
    Practice mapping over object dictionary sets using structural loop 
    extractors to generate data reports.
*/

/** EXERCISE 1: THE COMMS STATION CHECK **/

const stationPingsMs = {
    tychoStation: 42,
    ceresStation: 185,
    baseCidonia: 310,
};

/*
    TODO: Use a 'for...in' loop to iterate through the 'stationPingsMs' object.
    Log a network diagnostic statement for each entry using a template literal:
    "Connection to [stationKey] latency is: [ping value]ms."
*/

for (let stationKey in stationPingsMs) { // For...In loops because we are iterating over an object with key-value pairs

    let pingValues = stationPingsMs[stationKey] // Need to declare and initialize a variable for the value of the key pair
    console.log(`Connection to ${[stationKey]} latency is: ${pingValues}ms.`)

}

/** EXERCISE 2: WEAPONS INVENTORY VERIFICATION **/

const pdcAmmoLocker = {
    bayOneRails: 400,
    bayTwoRails: 150,
    bridgeDefenses: 0,
};

let ammoLockerArray = Object.keys(pdcAmmoLocker); // Calling the keys method of the object Object to create an array

for (ammoLockerKey of ammoLockerArray) { // Use For...of loops because iterating over an array
    if (pdcAmmoLocker[ammoLockerKey] === 0) { 
        console.log(`CRITICAL DEPLETION: ${[ammoLockerKey]} ammo is completely empty!`)
    }
}

/*
    TODO: Use 'Object.keys()' to extract an array of all keys from 'pdcAmmoLocker'.
    Iterate over that keys array using a 'for...of' loop.
    Inside the loop, check if the value of that key equals 0. If it does, 
    log an emergency update using a template literal: "CRITICAL DEPLETION: [key] ammo 
    is completely empty!"
*/