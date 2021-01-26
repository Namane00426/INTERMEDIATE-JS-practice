// Write your code here:
const convertToBaby = (arr) => {
  var newArray = [];
  for (string of arr) {
    var babyWord = `baby ${string}` ;
    newArray.push(babyWord)
  }
  return newArray;
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

