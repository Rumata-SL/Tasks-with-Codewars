"use strict";
// 1 -------------------------
/* 
      Тимми и Сара думают, что они влюблены, но там, где они живут,
      они узнают об этом, только когда каждый сорвет по цветку.
      Если у одного из цветов четное количество лепестков,
      а у другого нечетное количество лепестков, 
      это означает, что они влюблены.
      Напишите функцию, которая будет принимать количество
      лепестков каждого цветка и возвращать true,
      если они влюблены, и false, если нет.
 */

/* function lovefunc(flower1, flower2) {
      if (
            (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
            (flower1 % 2 !== 0 && flower2 % 2 === 0)
      ) {
            return true;
      } else {
            return false;
      }
} */
// 2 ------------------------------------

/* 
      Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
      Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
      Функция принимает имя в качестве единственного аргумента
      и возвращает одну из следующих строк:
      name + " plays banjo" 
      name + " does not play banjo" 
*/
/* function areYouPlayingBanjo(name) {
      name =
            name[0] === "R" || name[0] === "r"
                  ? `${name} plays banjo`
                  : `${name} does not play banjo`;
      return name;
} */
// 3 --------------------------------
/* 
      Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.
      Числа могут быть отрицательными или нецелыми. 
      Если массив не содержит чисел, вы должны вернуть 0.
      Примеры
      Вход: [1, 5.2, 4, 0, -1]
      Выход:9.2
      Вход: []
      Выход:0
      Вход: [-2.398]
      Выход:-2.398
 */
/* function sumArr(number) {
      let sum = 0;
      if (number === []) {
            return 0;
      } else {
            for (let i = 0; i < number.length; i++) {
                  sum += number[i];
            }
      }
      return +sum;
}
console.log(sumArr([-2.398])); */
// 4 -------------------------------
/*
      В вашем классе был тест, и вы его прошли. Поздравляем!
      Но вы амбициозный человек. Вы хотите знать, лучше ли вы,
      чем средний ученик в вашем классе.
      Вы получаете массив с результатами тестов ваших сверстников.
      Теперь посчитайте среднее и сравните свой результат!
      Вернись True, если тебе лучше, иначе False!
*/
/* function betterThanAverage(classPoints, yourPoints) {
      let sum = 0;
      for (let i = 0; i < classPoints.length; i++) {
            sum = sum + classPoints[i];
      }
      sum = sum / classPoints.length;
      return sum < yourPoints;
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));
 */
// 5 ------------------------------

/* 
      Учитывая массив целых чисел, вернуть новый
      массив с удвоением каждого значения.
      Например:
      [1, 2, 3] --> [2, 4, 6]
*/
/* let arr1 = [1, 2, 3, 4];
function getArr(x) {
      let arr = [];
      for (let i = 0; i < x.length; i++) {
            arr.push(x[i] * 2);
      }
      return arr;
}
console.log(getArr(arr1)); */
