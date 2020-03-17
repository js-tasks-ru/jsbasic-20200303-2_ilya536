/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */





//const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

//const wer = '25,-1,-234,4,   1000';






function getMinMax(str) {

let arr = str.split(" ");
let arr1 = str.split(",");


 arr =  arr
			.concat(arr1)

			.map( (item) => parseFloat(item))

			.filter((item) => isNaN(item) !==true);
	
const min = Math.min(...arr);

const max = Math.max(...arr);

const result = {

	min,
	max,

}

return result;

}




//console.log (getMinMax(wer));
//console.log (getMinMax(inputData));