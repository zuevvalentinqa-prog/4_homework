var arr = [
  {
    userName: "Test",
    lastName: "Qwerty",
    email: "test.mail@bigmir.net"
  },
  {
    userName: "Valik",
    lastName: "Zuiev",
    email: "valik.zuiev@gmail.com"
  },
  {
    userName: "Enemy",
    lastName: "",
    email: "enemy@mail.ru" //
  },
];

// проверк email с gmail.com или bigmir.net
const trustedEmailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|bigmir\.net)$/;

// Фильтруем массив
const trustedUsers = arr.filter(user => trustedEmailPattern.test(user.email));

// Проверим результат
console.log(trustedUsers);
