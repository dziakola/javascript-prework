var computerMove, playerMove, playerInput, randomNumber;
randomNumber = Math.floor(3 * Math.random() + 1);
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log(`wylosowana liczba to ${randomNumber}`);

if (randomNumber == "1") {
  computerMove = "kamień";
} else if (randomNumber == "2") {
  computerMove = "papier";
} else if (randomNumber == "3") {
  computerMove = "nożyce";
}
printMessage(`Mój ruch to ${computerMove}`);

if (playerInput > 3 || playerInput < 1) {
  printMessage(`Wybrałeś błędny numer, przegrałeś1`);
  4;
} else if (playerInput == "1") {
  playerMove = "kamień";
  printMessage(`Twój ruch to ${playerMove}`);
} else if (playerInput == "2") {
  playerMove = "papier";
  printMessage(`Twój ruch to ${playerMove}`);
} else if (playerInput == "3") {
  playerMove = "nożyce";
  printMessage(`Twój ruch to ${playerMove}`);
}
