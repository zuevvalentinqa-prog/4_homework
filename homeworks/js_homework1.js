//1 задание 'number' + 3 + 3
// шаг 1: 'number' + 3 = строка "number3"
// шаг 2: "number3" + 3 = строка "number33"
console.log('number' + 3 + 3)

//2 задание null + 3
//ничего + 3 = 3
console.log(null + 3)

//3 задание 5 && "qwerty"
// слева 5 это true, значит смотрим направо qwerty
console.log(5 && "qwerty")

//4а задание '40' + +'2' + "hillel"
//'40' число, операция унарного плюса, второй плюс оператор сложения +2
//число 42 плюс строка = 42hillel
console.log('40' + +'2' + "hillel")

//5.задание '10' - 5 === 6;
// '10' - 5 = 5 -> 5 меньше чем === 6 тогда будет false
console.log('10' - 5 === 6)

//6.задание true + false = 1 (true → 1, false → 0) тогда будет 1
console.log(true + false);

//7 задание '4px' - 3 = NaN (нельзя вычесть число из строки с буквами)
console.log('4px' - 3);

//8 задание '4' автоматически преобразуется в число 4 → 4 - 3 = 1
console.log('4' - 3);

//9 задание '6' + 3 ** 0 = '61' '6' + 1 → строка + число → строка "61"
console.log('6' + 3 ** 0);

//10 задание 12 / '6' = 2 
// '6' преобразуется в число 6 → 12 / 6 = 2
console.log(12 / '6');

//11 здание '10' + (5 === 6) = '10false' (5 === 6 → false, строка + boolean = строка)
console.log('10' + (5 === 6));

//12 задание null == '' = false (null только равно undefined)
console.log(null == '');

//13 здание 3 ** (9 / 3) = 27 (9 / 3 = 3, 3 ** 3 = 27)
console.log(3 ** (9 / 3));

//14 задание !!'false' == !!'true' = true (любая непустая строка = true)
console.log(!!'false' == !!'true');

//15задание 0 || '0' && 1 = 1
// '0' && 1 → оба значения truthy → результат 1
console.log(0 || '0' && 1);

//16 задание (+null == false) < 1 → true
// true < 1 → 1 < 1 = false
console.log((+null == false) < 1);

//17 задание. false && true || true
// false && true → false
// false || true → true
console.log(false && true || true); // true

// 18 задание false && (false || true)
// (false || true) → true
// false && true → false
console.log(false && (false || true)); // false

// 19 задание. (+null == false) < 1 ** 5
// +null → 0, false → 0 → 0 == 0 → true
// 1 ** 5 = 1
// true < 1 → 1 < 1 → false
console.log((+null == false) < 1 ** 5); // false
