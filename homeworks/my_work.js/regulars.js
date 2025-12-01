let re = /\+380\d{9}/g; // регулярка

let text = "мой +380935993531, мамы +380501339047, бати +20689778999";
let result = text.match(re);

console.log(result); 

let str = "У меня айфон 26, у папы андроид 15, у мамы андроид 13";
let re = /\d+/g;
console.log(str.match(re));

let str = "8890G";
let re = /^\d{5}$/;
console.log(re.test(str));

let password = "Test12345*";
let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
console.log(re.test(password));
