/* Loops
Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers



Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4



Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

 */
function sumOfN(n) {
  let res = 0;
  for(let i=1; i<=n; i++)
  {
      res+=i;
  }
  return res;
}

function printMultiplicationTable(n) {
    let arr= [];
  for(let i= 1; i<=10; i++)
  {
        arr.push(`${n} * ${i} = ${n*i}`);
  }
  return arr;
}

function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
 
    for (let vow of str) {
        if (vowels.includes(vow.toLowerCase())) {
            count++;
        }
    }
 
    return count;
}
