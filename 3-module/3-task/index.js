/**
 * @param {string} str
 * @returns {string}
 */

function camelize(str) {

	let arrStart = str.split('-')
					.map( (item , index) => 
						index==0 ? item : item[0].toUpperCase() + item.slice(1)
					)
					.join('')

return arrStart;

}
//console.log (camelize('list-style-image'));	










/*function camelize(str) {

	let arrStart = str.split('-')
					.map( function (item , index) { 
						if (index==0)  { return item = item; 
					} else { 

						return item = item[0].toUpperCase() + item.slice(1);

					}

					}).join('')

return arrStart;

}
console.log (camelize('list-style-image'));	*/