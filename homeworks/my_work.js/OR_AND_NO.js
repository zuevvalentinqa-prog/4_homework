// || — Логическое ИЛИ
//Работает так:
//👉 Возвращает первое значение, которое воспринимается как true, иначе — последнее.
//Запомни эти 6 значений, они всегда false (ложь): false 0 '' null undefined NaN // ВСЁ остальное — это true (truthy)
console.log(0 || false || 'hello'); // 'hello'
console.log('text' || 123);         //  'text' — непустая строка → true ✅ ➡️ Сразу возвращает 'text'
console.log(null || 0 || NaN);      // NaN || (ИЛИ) возвращает первое truthy значение, а если все значения falsy, то последнее.
console.log(false || true);         // true
console.log(undefined || 'default');// 'default'

//Что считается false в JavaScript: false 0 '' (пустая строка) null undefined NaN Всё остальное — true (truthy)

//&& — Логическое И
//Работает так:
//👉 Возвращает первое значение, которое воспринимается как false, иначе — последнее.
console.log(true && 'hello');     // 'hello'
console.log('hi' && 123);         // 123
console.log(null && 'text');      // null
console.log(false && true);       // false
console.log('hello' && 0 && true);// 0

//Резюме:
// || — находит первое правдивое значение (или последнее, если все ложные).
// && — находит первое ложное значение (или последнее, если все правдивые).



// 🔸 JavaScript Logical Operators Overview

// ==============================
// 🔹 Оператор || (ИЛИ)
// ==============================
// Возвращает первое truthy значение или последнее, если все falsy

console.log(0 || false || 'hello');     // 'hello'
console.log('text' || 123);             // 'text'
console.log(null || 0 || NaN);          // NaN
console.log(false || true);            // true
console.log(undefined || 'default');    // 'default'

// ==============================
// 🔹 Оператор && (И)
// ==============================
// Возвращает первое falsy значение или последнее, если все truthy

console.log(true && 'hello');          // 'hello'
console.log('hi' && 123);              // 123
console.log(null && 'text');           // null
console.log(false && true);            // false
console.log('hello' && 0 && true);     // 0

// ==============================
// 🔹 Оператор ! (НЕ)
// ==============================
// Инвертирует логическое значение

console.log(!true);     // false
console.log(!false);    // true
console.log(!'');       // true
console.log(!123);      // false
console.log(!null);     // true
console.log(!'JavaScript'); // false

// ==============================
// 🔸 Список falsy значений в JavaScript:
// ==============================
// false
// 0
// -0
// 0n (BigInt)
// ''
// null
// undefined
// NaN

// Всё остальное — truthy (истинно)

// 🔸 Пример цепочки:
// || останавливается на первом truthy
console.log('first' || 'second');  // 'first'

// && останавливается на первом falsy
console.log(0 && 'next');          // 0

// Можно комбинировать:
console.log((0 || false || '') && 'hi'); // '' — т.к. '' — falsy, и он последний перед &&

// ==============================
// 🔸 Комбинации:
// ==============================

console.log(true || false && false);     // true
console.log((true || false) && false);   // false
console.log(!0 && 'yes');                // 'yes' (т.к. !0 → true → true && 'yes' = 'yes')
console.log(!!'text');                   // true — двойное отрицание превращает в boolean

// ==============================
// Готово!
