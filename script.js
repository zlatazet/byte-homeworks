// Task 1

const booleanArray = [true, false, false, true, false, true, true, false];

  const howMuchTrue = (arr) => {
      let numb = 0;
      arr.forEach(number => {
          if (number === true){
              numb++;
          }
      });
      return numb;
  }
  const result = howMuchTrue(booleanArray);
  console.log(result);

// Task 2

getOccurrencesCount(["a", "v", "a", "b", "b"]);
// {
//   a: 2,
//   v: 1,
//   b: 2,
// }

getOccurrencesCount([
  "apples",
  "oranges",
  "pears",
  "pears",
  "apples",
  "oranges",
  "oranges",
  "pears",
]);
// {
//   apples: 2,
//   oranges: 3,
//   pears: 3,
// }

const getLettersCount = (arr) => {
    const res = {};

    arr.forEach(item => {
        if (!res[item]){
            res[item] = 1;
        } else{
            res[item] += 1;
        }
    });
    return res;
}
const result2 = getLettersCount(getOccurrencesCount);
console.log(result2);

// Task 3

const excessArray = [2, 6];

findExcess([0, 1, 2]); // -> 1
findExcess([1, 2, 3]); // -> 2
findExcess([2, 6, 8, 10, 3]); // -> 3
findExcess([0, 0, 3, 0, 0]); // -> 3
findExcess([1, 1, 0, 1, 1]); // -> 0

const findExcess = (arr) => {
    let evenArray = [];
    let oddArray = [];

    if (arr.length <= 2){
        return alert(`Array is short!!!`);
    }

    arr.forEach(integer => {
        if (integer % 2 === 0){
            evenArray.push(integer);
        } else {
            oddArray.push(integer);
        }
    });
    
    if (evenArray.length > oddArray.length){
        return oddArray[0];
    } else {
        return evenArray[0];
    }
}

const result3 = findExcess(excessArray);
console.log(result3);