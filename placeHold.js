const randomPlaceHoldStringsLength = randomPlaceHoldStrings.length;
const randomPlaceHoldStringsNumber = Math.floor(Math.random() * randomPlaceHoldStringsLength);
const randomPlaceHoldString = randomPlaceHoldStrings[randomPlaceHoldStringsNumber];

input.setAttribute("placeholder", randomPlaceHoldString);