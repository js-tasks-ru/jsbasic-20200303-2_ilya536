/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */


function isValid(name) {
  if (name === null
    || name === undefined
    || name === ''
    || name.length < 4
    || name.indexOf(' ') !== -1) {

    return name = false;

  } else {

    return name = true;

  }

}

  function sayHello() {
    const userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
      print(`Welcome back, ${userName}!`);
    } else {
      print('Некорректное имя');
    }
  }

