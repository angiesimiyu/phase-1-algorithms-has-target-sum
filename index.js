function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < (array.length - 1 ); i++) {
    for (j = (i + 1); j < array.length; j++) {

        if (array[i] + array[j] == target) {
            return true;
        }
    }
}

return false;


}

/*
  Write the Big O time complexity of your function here
*/
'Time Complexity: O(N**2)'
/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
'The sum of a pair of numbers in an array should equal the target integer'
  'if there is a pair in the arry that meets the condition return true'
  'else return false'

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
