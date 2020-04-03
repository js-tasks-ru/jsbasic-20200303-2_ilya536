/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  let _table =this.el;

  // Cоздание заголовка таблицы

  _table.insertAdjacentHTML( 'afterbegin',
    `<thead class = "result1">
        <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Salary</td>
        <td>City</td>
      </tr>
  </thead>`)

  

//Cоздание строк таблицы с использованием исходных данных

for (let i=0 ; i<items.length ; i++) {

  let _tr = document.createElement('tr');
  _table.appendChild(_tr);

  let _tdName = document.createElement('td');
  _tdName.innerHTML = items[i].name
  _tr.appendChild(_tdName);


  let _tdAge = document.createElement('td');
  _tdAge.innerHTML = items[i].age;;
  _tr.appendChild(_tdAge);


  let _tdSalary = document.createElement('td');
  _tdSalary.innerHTML = items[i].salary;
  _tr.appendChild(_tdSalary);


  let _tdCity = document.createElement('td'); 
  _tdCity.innerHTML = items[i].city;
  _tr.appendChild(_tdCity);

 }

let sumTr = _table.rows;


/**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
   


this.sort = (column, desc = false) => {



  let arr = Array.from(sumTr); 
  
  let sumTrspliceResult = arr.splice(0,1);

  if (column === 2) {
  
    arr.sort( function (a,b) {

      if (+a.cells[2].innerHTML > +b.cells[2].innerHTML) {return 1;}
      
      if(+a.cells[2].innerHTML < +b.cells[2].innerHTML) {return -1;}

      return 0;})} 


  if (column === 0 && desc === false) {

    arr.sort( function (a,b) {
      if (a.cells[0].innerHTML > b.cells[0].innerHTML) { return 1;}
      if(a.cells[0].innerHTML < b.cells[0].innerHTML) {return -1;}
      return 0;})} 

    if (column === 0 && desc === true) {

    arr.sort( function (a,b) {
      if (a.cells[0].innerHTML < b.cells[0].innerHTML) { return 1;}
      if(a.cells[0].innerHTML > b.cells[0].innerHTML) {return -1;}
      return 0;})} 

  
  for (let i =0 ; i<arr.length; i++) {

    _table.appendChild(arr[i]);

   }
 





}
}