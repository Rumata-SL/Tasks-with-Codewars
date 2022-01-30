"use strict";
// № 1 --------------------------------------------
/* 
      Преобразовать число в двоичное и получить количество единиц в нем.
 */
/* 
let number = 123;
let count = 0;
function getTwoNumeric(num) {
      let two = +parseInt(num).toString(2);
      two += "";
      for (let i = 0; i < two.length; i++) {
            if (two[i] == 1) {
                  count++;
            } else {
                  i++;
            }
      }
      return count;
}
console.log(getTwoNumeric(number));
 */
// № 2 -------------------------------------------------
/* 
      Написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'
 */

/* 
let number = 12541;
function maskify(num) {
      num = num + "";
      let str = num.slice(-4);
      let noVision = "";

      for (let i = num.length - 4; i > 0; i--) {
            noVision += "*";
      }
      return noVision + str;
}
console.log(maskify(number)); 
*/

//№ 3 ---------------------------------------------------

/*
      Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9.
      Сумма этих кратных равна 23. Завершите решение так, чтобы оно возвращало сумму всех чисел,
      кратных 3 или 5 , меньше переданного числа. Кроме того, если число отрицательное, верните 0.
      Примечание. Если число кратно и 3, и 5, считайте его только один раз.
 */
/* 
let num = 21;
function solution(number) {
      if (number < 0) {
            return console.log(0);
      }

      let arr = [];
      for (let i = 1; i < number; i++) {
            arr.push(i);
      }

      let count = [];
      for (let i = 0; i < arr.length; ) {
            if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
                  count.push(arr[i]);
                  i++;
            } else if (arr[i] % 3 === 0) {
                  count.push(arr[i]);
                  i++;
            } else if (arr[i] % 5 === 0) {
                  count.push(arr[i]);
                  i++;
            } else {
                  i++;
            }
      }
      console.log(count);
      let sum = 0;
      for (let i = 0; i < count.length; i++) {
            sum += count[i];
      }
      console.log(sum);
      return sum;
}
solution(num);
 */

//№ 4 -----------------------------------------------
/* 
      Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов.
      Таким образом, тексты можно редактировать, искать и сохранять на компьютере.
      Когда документы (особенно довольно старые, написанные на пишущей машинке) оцифровываются,
      программы распознавания символов часто допускают ошибки.
      Ваша задача - исправить ошибки в оцифрованном тексте. 
      Вам нужно только исправить следующие ошибки:
      S неверно интерпретируется как 5
      O неверно интерпретируется как 0
      Я неправильно истолкован как 1
      Тестовые случаи содержат числа только по ошибке.
 */

/* 
let str1 = "L0rem 1p5um d0l0r 51t amet con5ectetur ad1p151c1ng el1t.";
let str2 = "L 0 N D 0 N";

function correct(string) {
      let arr = string.split("");
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "0" && arr[i] != " ") {
                  arr[i] = "O";
            } else if (arr[i] == "5") {
                  arr[i] = "S";
            } else if (arr[i] == "1") {
                  arr[i] = "I";
            }
      }
      arr[0] = arr[0].toUpperCase();
      let str = arr.join("");
      return str;
}

console.log(correct(str1));
 */

//№ 5 -----------------------------------------------
/* 
      Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.
      Пример
      "camelCasing"  =>  "camel Casing"
      "identifier"   =>  "identifier"
      ""             =>  "" 
 */
/* 
let s = "helloWorldPeople";

function getCamelCase(str) {
      let arr = str.split(/(?=[A-Z])/).join(" ");
      return arr;
}
console.log(getCamelCase(s));
 */
//№ 6 ------------------------------------------------

/* 
      Напишите функцию bmi, 
      которая вычисляет индекс массы тела (bmi = вес / рост 2 ).
      если ИМТ <= 18,5, вернуть "Недостаточный вес"
      если ИМТ <= 25,0, вернуть «Нормальный»
      если ИМТ <= 30,0 вернуть "Избыточный вес"
      если ИМТ > 30, верните «Ожирение».
 */
/* 
let num1 = 99;
let num2 = 176;

function bmi(weight, height) {
      let index = weight / height ** 2;
      let count = "";
      if (index <= 18.5) {
            return (count += "Underweight");
      } else if (index <= 25.0) {
            return (count += "Normal");
      } else if (index <= 30.0) {
            return (count += "Overweight");
      } else if (index > 30) {
            return (count += "Obese");
      }
}
console.log(bmi(num1, num2));
 */

// № 7 --------------------------------------

/* 
      Нарциссическое число — это положительное число, представляющее собой сумму собственных цифр,
      каждая из которых возведена в степень количества цифр в данном основании. 
      В этом Ката мы ограничимся десятичными числами (с основанием 10).
      Например, возьмем 153 (3 цифры), что является самовлюбленным:
      1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
      и 1652 (4 цифры), что не является:
      1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
      Соревнование:
      Ваш код должен возвращать истину или ложь (не «истину» и «ложь») в зависимости от того,
      является ли данное число Нарциссическим числом в базе 10. 
      Это может быть Истина и Ложь на вашем языке, например PHP.
 */
/* let num1 = 12;
function checkNarcissisticNumber(value) {
      let bool = 0;

      let arr = value + "";

      arr = arr.split("");
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
            sum += arr[i] ** arr.length;
      }
      if (sum === value) {
            bool = true;
      } else {
            bool = false;
      }

      return bool;
}
console.log(checkNarcissisticNumber(num1));
 */

//№ 8 ----------------------------------
/* 
      Напишите простой метод .camelCase  для строк.
      Во всех словах первая буква должна быть заглавной без пробелов.
      Например:
      "hello case".camelCase() => HelloCase
      "camel case word".camelCase() => CamelCaseWord
 */
/* 
let str1 = "hello world wild";
String.prototype.toCamelCase = function () {
      return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (sbstr, i) => {
            return i === 0 ? sbstr.toUpperCase() : sbstr.toUpperCase();
      }).replace(/\s+/g, "");
};
console.log(str1.toCamelCase());
 */
/*
let str1 = "hello world wild";
String.prototype.toCamelCase = function () {
      let arr = this.split("");
      arr[0] = arr[0].toUpperCase();
      for (let i = 1; i < arr.length; i++) {
            if (arr[i] == " ") {
                  arr[i + 1] = arr[i + 1].toUpperCase();
                  arr.splice(i, 1);
            }
      }
      arr = arr.join("");
      return arr;
};
console.log(str1.toCamelCase()); 
*/
//№ 9 -------------------------------

/* 
      Завершите функцию scramble(str1, str2), которая возвращает,
      true если часть str1символов можно переставить, чтобы они соответствовали str2,
      иначе возвращает false.
      Примечания:
      Будут использоваться только строчные буквы (az). 
      Никакие знаки препинания или цифры не будут включены.
      Необходимо учитывать производительность .
 */
/* 
let st1 = "locc";
let st2 = "occ";
function sorted(str1, str2) {
      let count = Object.create(null);

      Array.prototype.forEach.call(str1, (a) => {
            count[a] = (count[a] || 0) + 1;
      });

      return Array.prototype.every.call(str2, (a) => {
            return count[a]--;
      });
}

console.log(sorted(st1, st2));
 */

//№ 10 --------------------------------
