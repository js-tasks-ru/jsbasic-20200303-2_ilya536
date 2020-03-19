/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */


//let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {

	let arr1=[];

	let result = arr.filter( (item) => {
    if((item > a || item==a) && (item < b || item==b))  

    return arr1.push(item);
  })

  return arr1;
}


//let filtered = filterRange(arr, 1, 4);

//console.log( filtered ); // [3,1] (совпадающие значения)
//console.log( arr ); // [5,3,8,1] (без изменений)


