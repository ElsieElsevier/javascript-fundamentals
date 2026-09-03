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

for (let scrubbers of atmosphericScrubbers) {
    if (scrubbers.filterLifePercent < 40) {
        console.log(`MAINTENANCE REQ: ${scrubbers.zone} filter core is critically low at ${scrubbers.filterLifePercent}%!`);
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

let totalThreatScore = 0;

for (let i = 0; i < targetDrones.length; i++) {
    totalThreatScore += targetDrones[i].threatScore;
}

const average = totalThreatScore / targetDrones.length;
console.log(`Target grid composite average threat rating: ${average}`);

/*
    TODO: Write a standard 'for' loop using index tracking counters ('i') to scan the list.
    Calculate the average threat score of all targets combined.
    Steps:
    1. Declare a mutable sum variable before the loop.
    2. Add up each drone's threat score inside the loop.
    3. Divide that total sum by 'targetDrones.length' after the loop concludes.
    4. Log the final value using a template literal: "Target grid composite average threat rating: [average]"
*/
