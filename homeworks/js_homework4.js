 ///Generator
 //Умови виконання ДЗ

//Функція виводить інформацію
//Кількість згенерованих чисел: кількість чисел
//Парних чисел: кількість парних чисел
//Не парних чисел: кількість не парних чисел
//Відсоток парних до не парних:
//Не використовувати функції або інші матеріали які ми не вивчали
//Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки

function checkProbabilityTheory(count) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 500) + 1; // от 1 до 500
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  const percentEven = (even / count) * 100;
  const percentOdd = (odd / count) * 100;

  console.log(`Сгенерировано чисел: ${count}`);
  console.log(`Чётных: ${even}`);
  console.log(`Нечётных: ${odd}`);
  console.log(`% чётных: ${percentEven.toFixed(2)}%`);
  console.log(`% нечётнх: ${percentOdd.toFixed(2)}%`);

  if (Math.abs(percentEven - 50) <= 5) {
    console.log("Результат близок к 50% — теория подтверждается.");
  } else {
    console.log("Результат далёк от 50% — теория не подтверждается.");
  }
}
checkProbabilityTheory(100);
