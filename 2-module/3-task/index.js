let calculator = {

  read (a,b) {
    //a = +prompt ("Введите первое число: ", "");
    //b = +prompt ("Введите второе число: ", "");
    this.a = a;
    this.b = b;

  },

  sum () {

    return sum = + this.a + + this.b
    this.sum = sum;

  },

  mul () {

    return mul = this.a * this.b;
    this.mul = mul;

  },

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
