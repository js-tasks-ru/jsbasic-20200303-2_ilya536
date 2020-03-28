/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

	for (let i = 0 ; i< table.rows.length; i++){	

		let status = table.rows[i].lastElementChild;

			if(status.getAttribute('data-available') === 'true') { 

				//table.rows[i].setAttribute('class','available');
				table.rows[i].classList.add('available');



			} else if (status.getAttribute('data-available') === 'false') {

				//table.rows[i].setAttribute('class','unavailable');
				table.rows[i].classList.add('unavailable');


			} else {

				table.rows[i].setAttribute('hidden','true');

			}

		let gender = table.rows[i].lastElementChild.previousElementSibling.firstChild.data;

		console.log (gender);
		

			if(gender === 'm') { 

				//table.rows[i].lastElementChild.previousElementSibling.setAttribute('class','male');
				table.rows[i].classList.add('male');

			} else  if(gender === 'f') {

				//table.rows[i].lastElementChild.previousElementSibling.setAttribute('class','female');
				table.rows[i].classList.add('female');

			}



		let ageTag = table.rows[i] //.lastElementChild.previousElementSibling.previousElementSibling;
		let ageData = table.rows[i].lastElementChild.previousElementSibling.previousElementSibling.firstChild.data;

		console.log (ageData);

			if(+ ageData < 18) { 

				ageTag.style.textDecoration = 'line-through';

			}
	}		
  	
}
