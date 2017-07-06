

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // TWO SUM
// // Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// // You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// function getSecondNumber(num1, num2) {
//   return num2 - num1;
// };
//
//
// var twoSum = function(nums, target) {
//   var targetIndices = new Array();
//   var targetIndex;
//   var counter = 0;
//   var secondNumber;
//
//   while (counter < nums.length) {
//     secondNumber = getSecondNumber(nums[counter], target);
//     targetIndex = nums.indexOf(secondNumber);
//     if (targetIndex !== -1 && targetIndex !== counter) {
//       targetIndices.push(counter);
//       targetIndices.push(targetIndex)
//       return targetIndices;
//     } else {
//       counter++
//     }
//   }
// };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // REVERSE STRING
// // Write a function that takes a string as input and returns the string reversed.
//
// var reverseString = function(string) {
//     var switchValue;
//     var switchIndex = string.length - 1;
//     var iterationAmount = Math.floor(string.length / 2)
//     var stringArray = string.split("");
//
//     for (var i = 0; i < iterationAmount; i++) {
//         switchValue =  stringArray[i];
//         stringArray[i] =  stringArray[switchIndex];
//         stringArray[switchIndex] = switchValue;
//         switchIndex--;
//     }
//     return  stringArray.join("");
// };
