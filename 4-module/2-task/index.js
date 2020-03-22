/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {


const trVar = table.rows;
let elem;
for (let i=0 ; i<trVar.length; i++) {

	elem = trVar[i].cells[i].style.backgroundColor = 'red';

	 }
return elem;
}

