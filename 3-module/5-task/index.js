/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */



/* Задача №5 модуля №3 функция фильтрует массив по заданному 
диапазону и возвращает новый массив не изменяя старый*/


function filterRange(arr, a, b) {

	let arr1=[];

	let result = arr.filter( (item) => {
    if((item > a || item==a) && (item < b || item==b))  

    return arr1.push(item);
  })

  return arr1;
}





