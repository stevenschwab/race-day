let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnersAge = 19;

if (runnersAge > 18 && isEarly) raceNumber += 1000;

if (runnersAge > 18 && isEarly) {
  console.log(`You will start your race at 9:30 am and ${raceNumber} is your race number.`);
} else if (runnersAge > 18 && !isEarly) {
  console.log(`Late adults run at 11:00 am and ${raceNumber} is your race number.`)
} else if (runnersAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration) and ${raceNumber} is your race number.`)
} else {
  console.log('Please see the registration desk.')
}