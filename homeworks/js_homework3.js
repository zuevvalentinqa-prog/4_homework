function pow(x, y) //то что нам будет выводится в лог
{
    let result = 1; //переменная и значение поставим 1, что б норм умножалось
   for (let i = 0; i < y; i++) //counter = 0 стртовое значение, i++ инкремент
    {
    result = result * x; //умножение
   }
   return result
}

console.log(pow(2, 3)); /// 1**2 = 2, 2*2 = 4, 4*2 = 8
console.log(pow(5, 3));
console.log(pow(7, -5)); //i = 0 а y должно быть больше , поэтому выведем результат 1