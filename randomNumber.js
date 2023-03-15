// Random Number Generator with Delay and Progress Indication:

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.
// const delayInSeconds = 3; 
// let timeLeft = delayInSeconds;

const intervalId = setInterval(() => {
  timeLeft--;
  console.log(`Generating random number in ${timeLeft} seconds...`);
  if (timeLeft === 0) {
    clearInterval(intervalId);
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000);