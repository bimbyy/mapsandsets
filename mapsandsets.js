/*Quick Question 1
new Set([1,1,2,2,3,4]) //{1,2,3,4}
*/

/* Quick Question 2
[...new Set("referee")].join("") //"ref"
*/

/*Quick Question 3
let m = new Map();
m.set([1,2,3],true);
m.set([1,2,3],false);
        //0:{Array(3)=> true}
        //1:{Array(3)=>false}
 */

//hasDuplicate
/*
function hasDuplicate(arr){
//arr([1,3,2,1])//true
arr([1,5,-1,4])//false
const hasDiplicate = arr => new Set(arr).size !== arr.length
}
*/
//VowelCount
//vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }
function vowelCount(str) {

    const vowels = "aeiou"; //Set up vowels 

    const count = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]]); // initialize the Map with 5 key-value pairs

    str.toLowerCase().split("").map(char => { //spliting lowercase

      if (vowels.includes(char)) { //if includes char

        count.set(vowels.indexOf(char) + 1, count.get(vowels.indexOf(char) + 1) + 1); //iterating and counting through the letters in array

      }
    });
    return count; //returning values
  }
  console.log(vowelCount('awesome')); //just logging it so you can visualy see