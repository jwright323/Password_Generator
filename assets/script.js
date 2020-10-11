document.querySelector("#generate").addEventListener("click", writePW);

//Types of characters to be used to create passwords.
const pwAbcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const pwAbcLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const pwNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const pwSpecChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

//Variables
let pwLength = "";
let pwAbcUp;
let pwAbcLow;
let pwNum;
let pwSpecChar;

function generatePW() {
    pwLength = " ";
    
//Password will be checked for minimum and maximum length. If not long enough, alert will be printed,
//along with how many characters the invalid password actually is.
while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Please select password length (Min. 8, Max 128)");

    if (pwLength === null) {
        alert("Restarting process");
        return " ";
    }
    else {
        if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
            alert("Password length does not meet requirements, please try again!");
        }
    }
}

//An alert to tell you how many characters that your password will be.
alert ("Your password will be ${pwLength} characters in length.");

//Determines what characters will be included in the new password being created.va
var pwAbcUp = confirm ("Please click OK to include uppercase letter in your new password.");
var pwAbcLow = confirm ("Please click OK to include lowercase letter in your new password.");
var pwNum = confirm ("Please click OK to include number(s) in your new password.");
var pwSpecChar = confirm ("Please click OK to include special characters in your new password.");

// Alert for if you do not choose the req'd parameters
while (pwAbcUp === false && pwAbcLow === false && pwNum === false && pwSpecChar === false) {
    alert ("You must choose at least one parameter");
    var pwAbcUp = confirm ("Click OK to confirm if you want to include uppercase characters");
    var pwAbcLow = confirm ("Click OK to confirm if you want to include lowercase characters");    
    var pwNum = confirm ("Click OK to confirm if you want to include numbers");
    var pwSpecChar = confirm ("Click OK to confirm if you want to include special characters");   
} 

    var pwChars = []
        
    if (pwAbcUp) {
        pwChars = pwChars.concat(pwAbcUp)
    }
    if (pwAbcLow) {
        pwChars = pwChars.concat(pwAbcLow)
    } 
    if (pwNum) {
        pwChars = pwChars.concat(pwNum)
    }
    if (pwSpecChar) {
        pwChars = pwChars.concat(pwSpecChar)
    }
    var randPW = ""
    for (var i = 0; i < pwLength; i++) {
        randPW = randPW + pwChars[Math.floor(Math.random() * pwChars.length)];
    }
    return randPW;
    }

//Writes password to "Your Secure Password" box
    function writePassword() {
        var password = generatePW();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
}
