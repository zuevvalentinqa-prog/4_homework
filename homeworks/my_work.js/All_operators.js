// Арифметические операторы
console.log(5 + 3); // 8 - сложение двух чисел
console.log('5' + 3); // '53' - строка + число => строка
console.log(5 - 3); // 2 - вычитание
console.log('5' - 3); // 2 - строка преобразуется в число
console.log(4 * 2); // 8 - умножение
console.log('4' * '2'); // 8 - строки преобразуются в числа
console.log(10 / 2); // 5 - деление
console.log(16 % 3); // 1 - остаток от деления (modulus) Сколько раз 3 вмещается в 16? → 3 × 5 = 15 Сколько осталось после 15? → 16 − 15 = 1
console.log(2 ** 3); // 8 - возведение в степень

// Операторы сравнения
console.log(5 == '5'); // true - нестрогое равенство (преобразует типы)
console.log(5 === '5'); // false - строгое равенство (без преобразования типов) .. Сравнивает и значение, и тип данных
console.log(5 != 5); // false - нестрогое неравенство (преобразует типы) ... Сравнивает только значение
console.log(5 !== '5'); // true - строгое неравенство
console.log(3 > 2); // true - больше
console.log(3 < 2); // false - меньше
console.log(3 >= 3); // true - больше или равно
console.log(3 <= 2); // false - меньше или равно

// Логические операторы
console.log(true && false); // false - и (всё должно быть true)
console.log(true || false); // true - или (хватит одного true)
console.log(!true); // false - отрицание (не)
console.log(!false); // true

// Примеры с логическими значениями и приоритетом
console.log(0 || false || 'hello'); // 'hello' - первое true значение
console.log('text' || 123); // 'text' - первое true значение
console.log(null || 0 || NaN); // NaN - последнее значение, все до него false
console.log(false || true); // true
console.log(undefined || 'default'); // 'default'

console.log(true && 'hello'); // 'hello' - если первое true, возвращает второе
console.log('hi' && 123); // 123 - оба true, возвращает последнее
console.log(null && 'text'); // null - первое false значение
console.log(false && true); // false
console.log('hello' && 0 && true); // 0 - первое false после true

// Унарный плюс и минус
console.log(+'5'); // 5 - преобразование строки в число
console.log(-'5'); // -5 - отрицательное число
console.log(+true); // 1 - true становится 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN

// Специальные случаи
console.log(undefined + 1); // NaN - undefined не может быть числом
console.log(null + 1); // 1 - null становится 0
console.log(true + false); // 1 - true = 1, false = 0
