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
    // генерация случайного  числа что входит в рейндж от 100 до 1000 включительно
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNumber % 2 === 0) {
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
  console.log(`Процент чётных: ${percentEven.toFixed(2)}%`);
  console.log(`Процент нечётных: ${percentOdd.toFixed(2)}%`);

  if (Math.abs(percentEven - 50) <= 5) {
    console.log("Результат близок к 50% — теория подтверждается.");
  } else {
    console.log("Результат далёк от 50% — теория не подтверждается.");
  }
}

checkProbabilityTheory(100);
