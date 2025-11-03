var user :{...}  = {
    age = 30;
}

user.town = 'Paris'

console.log(typeof user);

var user = {
    name: "John",
    sName: "Snow"
};
user.sName = "Dou";
console.log(user.sName)

var user = {
    name: "John",
    sName: "Snow"
};
delete user,sName;
console.log(user.sName)

var x = 12;

var obj = {
  "user name": "Василій", // ключ с пробелом, требует кавычек
  for: x,                 // ключ 'for', значение — переменная x (12)
  "2name": "Василій",     // допустимый ключ, хоть и начинается с цифры (в кавычках)
  14: true,               // числовой ключ
  'stop!': 'stop'         // строковый ключ с восклицательным знаком
};

// Властивість об'єкта може бути інший об'єкт!

var user = {
  name: 'Test',
  lastName: 'Test',
  credentials: {
    login: "test.test",
    password: 'Test123'
  }
};

// Выводим значения в консоль:
console.log(user.name);                    // 'Test'
console.log(user.credentials);             // { login: 'test.test', password: 'Test123' }
console.log(user.credentials.login);       // 'test.test'

var group = {
  name: 'QA pro',
  students: 17,
  time: '7.15',
  teachers: {
    teacher: 'Ivan',
    mentor: 'Oleg'
  },
  teachersInfo: function () {
    console.log('Main teacher: ' + group.teachers.teacher + ', mentor: ' + group.teachers.mentor);
  }
};

group.teachersInfo(); // вызов метода
