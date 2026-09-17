/**** EXCEPTION HANDLING: PRACTICE ****/

/*
    Practice setting up defensive error blocks to safely bypass code 
    failures and maintain execution flow.
*/

/** EXERCISE 1: DEFLECTING THE BAD VALUE CRASH **/

let gridShieldCharge = 100;

/*
    TODO: Wrap the problematic code below inside a try/catch/finally sequence.
    1. Inside the 'try' block, attempt to run the broken line.
    2. Inside the 'catch' block, log: "System bypassed a fatal crash." 
       and re-assign the 'gridShieldCharge' variable to 0 as a safety protocol.
    3. Inside a 'finally' block, print a final statement with the value of 
       gridShieldCharge.
*/


try {
   gridShieldCharge.toUpperCase();
} 
   
catch(err) {
   console.log("System bypassed a fatal crash.");
   gridShieldCharge = 0;
}

finally {
   console.log(`Final grid shield charge: ${gridShieldCharge}`)
}



/** EXERCISE 2: THE SECURE DEPLOYMENT ENGINE **/

let dockingClampStatus = "LOCKED";

/*
    TODO: Build a complete try/catch/finally sequence.
    1. Inside 'try', log: "Attempting automated separation..." 
       Then attempt to log a non-existent variable, synchronousDeploymentStatus
    2. Inside 'catch', log: "Separation error caught! Keeping clamps locked."
       Then print the errorObj using the Console API's .error method (instead of .log)
    3. Inside 'finally', update the 'dockingClampStatus' variable to read "MANUAL_OVERRIDE",
       and print a final report on the status of the docking clamp.
*/


try {
   console.log("Attempting automated separation...");
   console.log(synchronousDeploymentStatus)
} 
   
catch (errorObj) {
   console.log("Separation error caught! Keeping clamps locked.");
   console.error(errorObj);
}

finally {
   dockingClampStatus = "MANUAL_OVERRIDE";
   console.log(`Final docking clamp status: ${dockingClampStatus}`)
}

