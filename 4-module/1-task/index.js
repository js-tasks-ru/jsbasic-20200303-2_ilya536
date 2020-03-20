/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */


function makeFriendsList(friends) {


let ul = document.createElement('ul');


	 for(let elem of friends) {

		let liFullName = document.createElement('li');

	 	liFullName.innerHTML = `${elem.firstName}  ${elem.lastName}`;

	 	ul.append(liFullName);
	 }
	 	
	return ul;
	
	}






	



