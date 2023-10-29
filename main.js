let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 42;

if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly === true) {
    console.log(`Your race will begin at 9:30 am. Your race number is ${raceNumber}`);
} else if (runnerAge >= 18 && registeredEarly === false) {
    console.log(`Your race will begin at 11:00 am. Your race number is ${raceNumber}`);
} else {
    console.log(`Your race will begin at 12:30 pm. Your race number is ${raceNumber}`);
}

