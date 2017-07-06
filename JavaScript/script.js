// Reverse String
// Write a function that takes a string as input and returns the string reversed.

var reverseString = function(string) {
    var switchValue;
    var switchIndex = string.length - 1;
    var iterationAmount = Math.floor(string.length / 2)
    var stringArray = string.split("");

    for (var i = 0; i < iterationAmount; i++) {
        switchValue =  stringArray[i];
        stringArray[i] =  stringArray[switchIndex];
        stringArray[switchIndex] = switchValue;
        switchIndex--;
    }
    return  stringArray.join("");
};
