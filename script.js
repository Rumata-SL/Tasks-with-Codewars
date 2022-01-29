"use strict";
//---------------------------------------------------------------
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
//------------------------------------------------------------
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

//-------------------------------------------------------

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

//--------------------------------------------------------
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

//----------------------------------------------------
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
//----------------------------------------------------