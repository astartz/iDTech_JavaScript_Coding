// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

var fortune = -1;

fortuneTeller(0);

function fortuneTeller(tries){
    if(tries == 0){
        var fortune = prompt("I'm the fortune teller! Pick a number between 0 and 10.");
    }
    else{
        var fortune = prompt("Pick a number between 0 and 10.");
    }
    if(fortune >= 0 && fortune<=3){
        window.alert('Oh no! You selected a low fortune!');
    }
    else if(fortune > 3 && fortune <= 7){
        window.alert('You selected an average fortune.');
    }
    else if(fortune > 7 && fortune <= 10){
        window.alert('Congratulations! You selected great fortune.');
    }
    else{
        window.alert('It was hard to determine your fortune, try again!')
        fortuneTeller(1);
    }
}