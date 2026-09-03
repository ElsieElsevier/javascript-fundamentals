/**** LOOPING OVER ARRAYS OF OBJECTS: PRACTICE ****/

/*
    Practice drilling into array-wrapped data structures to filter 
    and evaluate real-time system states.
*/

/** EXERCISE 1: ENVIRONMENT CHECKUP **/

const atmosphericScrubbers = [
	{ zone: "Command Deck", filterLifePercent: 88 },
	{ zone: "Engineering Bay", filterLifePercent: 32 },
	{ zone: "Crew Quarters", filterLifePercent: 14 },
];

for (atmosphericScrubber of atmosphericScrubbers) { // Notice that the array consists of objects for its elements
                                                    // Practicing naming convention of plural for the array, and singular for the loop variable
    if (atmosphericScrubber.filterLifePercent < 40) { // We can use dot notation because we're calling the attribute of the array object.
        console.log(`MAINTENANCE REQ: ${atmosphericScrubber.zone} filter core is critically low at ${atmosphericScrubber.filterLifePercent}%!`)
    }
}


/*
    TODO: Use a 'for...of' loop to scan through the 'atmosphericScrubbers' array.
    Inside the loop, check if a scrubber's 'filterLifePercent' is less than 40.
    If it is, log a warning statement using a template literal:
    "MAINTENANCE REQ: [zone] filter core is critically low at [filterLifePercent]%!"
*/

/** EXERCISE 2: INTEL METRIC REPORTING **/

const targetDrones = [
	{ designation: "Drone-Alpha", threatScore: 4 },
	{ designation: "Drone-Beta", threatScore: 9 },
	{ designation: "Drone-Gamma", threatScore: 7 },
];

let threatScoreSum = 0; // Declaring and initiating the counter


for (let i = 0; i < targetDrones.length ; i++ ) { // Using the length property of the array shows up how many objects are inside
    threatScoreSum += targetDrones[i].threatScore // Using += means to add the current value to the existing value
    // Because we are iterating over the array using the loop variable i, each i value is the loop number so i = 0, means the first loop
    // We have to use bracket notation with the array and specify which loop using i, so in loop 0, it takes threatScore of 4 and adds it to 0
    // then in i = 1, the second loop, it takes the threatScore of 9 and adds it to 4
    console.log(threatScoreSum);
};

const threatScoreAverage = threatScoreSum / targetDrones.length; // Since we only calculate this value once, we should use const instead of let due to immutability
console.log(`Target grid composite average threat rating: ${threatScoreAverage}`)

/*
    TODO: Write a standard 'for' loop using index tracking counters ('i') to scan the list.
    Calculate the average threat score of all targets combined.
    Steps:
    1. Declare a mutable sum variable before the loop.
    2. Add up each drone's threat score inside the loop.
    3. Divide that total sum by 'targetDrones.length' after the loop concludes.
    4. Log the final value using a template literal: "Target grid composite average threat rating: [average]"
*/
