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
  let table =  this.el;

  table.insertAdjacentHTML('afterbegin', 
    `<thead>
    <tr>
      <td>Name</td>
      <td>Age</td>
      <td>Salary</td>
      <td>City</td>
    </tr>
    </thead>
    <tbody></tbody>`)
  let tbody = table.firstElementChild.nextElementSibling;
  console.log (tbody)

  for (let i = 0 ; i<items.length ; i++) {

    let rows = document.createElement('tr');
    tbody.append(rows);

    let cellName= document.createElement('td');
    cellName.innerHTML = items[i].name;
    rows.prepend(cellName);

    let cellAge= document.createElement('td');
    cellAge.innerHTML = items[i].age;
    rows.append(cellAge);
    
    let cellSalary= document.createElement('td');
    cellSalary.innerHTML = items[i].salary;
    rows.append(cellSalary);

    let cellCity= document.createElement('td');
    cellCity.innerHTML = items[i].city;
    rows.append(cellCity);

  }

  let rows = table.rows;
  console.log (rows);











  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {

    let arr = Array.from(rows);
    let result = arr.splice(0, 1);

    if (column == 0 && desc == false) {
    arr.sort( (a,b) => {

      if (a.cells[0].innerHTML > b.cells[0].innerHTML){ return 1;}
      if (a.cells[0].innerHTML < b.cells[0].innerHTML){ return -1;}
      if (a.cells[0].innerHTML === b.cells[0].innerHTML){ return 0;}

    })
  }

  if (column == 0 && desc == true) {
    arr.sort( (a,b) => {

      if (a.cells[0].innerHTML < b.cells[0].innerHTML){ return 1;}
      if (a.cells[0].innerHTML > b.cells[0].innerHTML){ return -1;}
      if (a.cells[0].innerHTML === b.cells[0].innerHTML){ return 0;}

    })
  }


  if(column == 2){  arr.sort( (a,b) => {

      if (+a.cells[2].innerHTML > +b.cells[2].innerHTML){ return 1;}
      if (+a.cells[2].innerHTML < +b.cells[2].innerHTML){ return -1;}
      if (+a.cells[2].innerHTML === +b.cells[2].innerHTML){ return 0;}

})
}

for (let i=0 ; i< arr.length; i++){

  tbody.append(arr[i]);
  console.log (arr[i]);
}

  };
}
