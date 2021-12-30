
 let maxNum = parseInt(prompt("Enter the maximum number!"));
 while (!maxNum) {
 	maxNum = parseInt(prompt("Enter a valid number please"));
 }
 
 const targetNum = Math.floor(Math.random() * maxNum) + 1;
 console.log(targetNum);

 let guess = parseInt(prompt("Enter your first guess!"));
 let attempts = 1;

 while (parseInt(guess) !== targetNum) {
 	if (guess === "quit") break;
 	attempts++;
 	if (guess > targetNum) {
   	guess = prompt("Too high, pick a lower number");
   } else {
   	guess = prompt("Too low, pick a higher number");
   }
 }
 if (guess ===  "quit") {
 	console.log("ok, u noob")
 } else {
 console.log(`congrats, it took u ${attempts} guesses`);
 }
