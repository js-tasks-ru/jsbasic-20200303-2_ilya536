/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
let users = [

{
  "balance": "$1,825.65",
  "picture": "http://placehold.it/32x32",
  "age": 30,
  "name": "Ерыгин Илья",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favoriteFruit": "banana"
},
  {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 19,
    "name": "Ольга Дроздова",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 18,
    "name": "Светлана Безручко",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "balance": "$1,825.65",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "name": "Вера Попова",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },


]







/*function showSalary(data, age) {

  	let resultAge = data.filter((data) => {

       return data.age <= age 

   	})
  
  	let namePrice =  resultAge.map( (resultAge) => {

  	   return resultAge.balance + ', ' + resultAge.name + '\n';

  }

	) 

  	

  		return namePrice;
  	}




console.log (showSalary(users, 18));*/



function showSalary(data, age) {
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
}








