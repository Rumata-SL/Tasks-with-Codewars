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

/* 
      Анаграмма — это результат перестановки букв слова для получения нового слова .
      Примечание: анаграммы нечувствительны к регистру .
      Завершите возвращаемую функцию, trueесли два заданных аргумента являются анаграммами друг друга; вернуть falseиначе.
      Примеры
      "foefet" является анаграммой "toffee"
      "Buckethead" является анаграммой "DeathCubeK"
 */
/* 
const isAnagram = function (test, original) {
      test = test.toLowerCase().split("").sort().join("");
      original = original.toLowerCase().split("").sort().join("");
      let res = test == original ? true : false;
      return res;
};
isAnagram("Buckethead", "DeathCubeK"); 
*/
//Другое решение
/* function isAnagram(test, original) {
      return (
            test.toLowerCase().split("").sort().join("") ===
            original.toLowerCase().split("").sort().join("")
      );
} */

//Другое решение
/* String.prototype.sortLetters = function () {
      return this.toLowerCase().split("").sort().join("");
};

var isAnagram = function (test, original) {
      return test.sortLetters() == original.sortLetters();
}; */

//№ 11 --------------------------------

/*
      Подсчитайте количество делителей натурального числа n.
      Случайные тесты доходят до n = 500000.
      Примеры (ввод --> вывод)
      4 --> 3 (1, 2, 4)
      5 --> 2 (1, 5)
      12 --> 6 (1, 2, 3, 4, 6, 12)
      30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30) 
 */
/* 
let n = 20;
let count = 0;

function getDivisorsCnt(n) {
      for (let i = 1; i <= n; ) {
            if (n % i === 0) {
                  count += 1;
                  console.log(i);
                  i++;
            } else {
                  i++;
            }
      }
}
 */
//№ 12 --------------------------------
/* 
      Учитывая целое число в качестве входных данных,
      можете ли вы округлить его до следующего (то есть «большего») числа, кратного 5?
 */
/* 
let a = 26;
function round5(x) {
      return Math.ceil(x / 5) * 5;
}
console.log(round5(a));
 */
//№ 13 --------------------------------

/*
      Создайте функцию, которая возвращает имя победителя в схватке между двумя бойцами.
      Каждый боец ​​по очереди атакует другого, и побеждает тот, 
      кто убьет другого первым.
      Смерть определяется как наличие health <= 0.
      Каждый боец ​​будет Fighterобъектом/экземпляром.
      См. класс бойца ниже на выбранном вами языке.
      Оба healthи damagePerAttack будут целыми числами больше, чем 0.
      Вы можете мутировать Fighterобъекты.
      Пример:
      function Fighter(name, health, damagePerAttack) {
            this.name = name;
            this.health = health;
            this.damagePerAttack = damagePerAttack;
            this.toString = function() { return this.name; }
      }
 */
/* class Figther {
      constructor(name, health, damagePerAttack) {
            this.name = name;
            this.health = health;
            this.damagePerAttack = damagePerAttack;
      }
      toString() {
            return this.name;
      }
}

const sergey = new Figther("Serg", 100, 10);
const kirill = new Figther("Kirr", 100, 12);

function checkKombat(fighter1, fighter2, firstAttacker) {
      let count1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
      console.log(count1);
      let count2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
      console.log(count2);

      if (count1 == count2) {
            return firstAttacker;
      } else {
            return count1 > count2 ? fighter1.name : fighter2.name;
      }
}
console.log(checkKombat(sergey, kirill)); */

//№ 14 --------------------------------
/* 
      Напишите функцию, которая принимает массив строк в качестве аргумента и 
      возвращает отсортированный массив, содержащий те же строки, упорядоченные 
      от самой короткой до самой длинной.
      Например, если этот массив был передан в качестве аргумента:
      ["Telescopes", "Glasses", "Eyes", "Monocles"]
      Ваша функция вернет следующий массив:
      ["Eyes", "Glasses", "Monocles", "Telescopes"]
*/
/* let arr = ["I", "To", "Beg", "Life"];

function sortByLength(array) {
      return array.sort((a, b) => {
            return a.length - b.length;
      });
}
console.log(sortByLength(arr)); */
//№15 -----------------------------------
/* 
      Измените kebabizeфункцию, чтобы она преобразовывала строку регистра верблюда в регистр кебаба.
      kebabize('camelsHaveThreeHumps') // camels-have-three-humps
      kebabize('camelsHave3Humps') // camels-have-humps
      Примечания:
      возвращаемая строка должна содержать только строчные буквы  
*/
/* let s = "cam1elsHave3Humps";

function getCamelCase(str) {
      str = str
            .replace(/[0-9]/g, "")
            .split(/(?=[A-Z])/)
            .join("-")
            .toLowerCase();
      return str;
}
console.log(getCamelCase(s)); */
//№16 ---------------------------
/* 
      Алиса и Боб были в отпуске. Они оба сделали много фотографий мест,
      где побывали, и теперь хотят показать Чарли всю свою коллекцию. 
      Однако эти сеансы Чарли не нравятся, так как мотив обычно повторяется. 
      Ему не нравится смотреть на Эйфелеву башню 40 раз. Он говорит им,
      что будет сидеть во время сеанса только в том случае, если они
      покажут один и тот же мотив не более N раз. К счастью, Алиса и
      Боб могут закодировать мотив в виде числа. Можете ли вы помочь им удалить числа так, 
      чтобы их список содержал каждое число только до N раз, 
      не меняя порядок?
 */
/* function deleteNth(arr, n) {
      let map = {};
      return arr.filter((value) => {
            map[value] === undefined ? (map[value] = 1) : (map[value] += 1);
            if (map[value] <= n) {
                  return value;
            }
      });
} */
//№17 -------------------------------------
/* 
      Завершите функцию квадратной суммы, 
      чтобы она возводила в квадрат каждое переданное ей число,
      а затем суммировала результаты.
      Например, for [1, 2, 2]это должно возвращаться ,
      9потому что 1^2 + 2^2 + 2^2 = 9.
 */
/* let num = [0, 3, 4, 5];
function squareSum(numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i] ** 2;
      }
      return sum;
}
console.log(squareSum(num)); */

// №18 ----------------------------------
/* 
      Есть массив с некоторыми числами. 
      Все числа равны, кроме одного. 
      Попробуйте найти!
      findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
      findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
      Гарантируется, что массив содержит не менее 3 чисел.
      Тесты содержат очень большие массивы, так что подумайте о производительности.
 */
/* let arr1 = [1, 1, 1, 2, 1, 1];

function findUniq(arr) {
      arr.sort();

      for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1]) {
                  return arr[i];
            } else {
                  return arr[arr.length - 1];
            }
      }
}
console.log(findUniq(arr1)); */
//№19 -----------------------------
/* 
      Просто, учитывая строку слов, вернуть длину
      кратчайшего слова (слов).
      Строка никогда не будет пустой, и вам не нужно
      учитывать разные типы данных. 
*/
/* let str = "turns out random test cases are easier than writing out basic ones";

function findShort(s) {
      let str1 = s.split(" ");
      str1 = str1.sort((a, b) => a.length - b.length);
      return str1[0].length;
}
findShort(str); */
//№20 -----------------------------------
/*
      Нам нужна функция, которая может 
      преобразовать строку в число.
      Какие способы достижения этого вы знаете?
      Примечание. Не беспокойтесь, все входные 
      данные будут строками, 
      а каждая строка является абсолютно допустимым
      представлением целого числа.
 */
/* let num = "124142";

const stringToNumber = function (str) {
      return (str = +str);
};
console.log(stringToNumber(num)); */
//№21 ----------------------------------
/* 
      В этом небольшом задании вам дается строка чисел,
      разделенных пробелами,
      и вы должны вернуть наибольшее и наименьшее число.
  */
/* let str = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

function num(numbers) {
      numbers = numbers.split(" ");
      numbers = numbers.sort((a, b) => a - b);
      let arr = [numbers[numbers.length - 1], numbers[0]];
      arr = arr.join(" ");
      return arr;
}
console.log(num(str)); */
//№22-------------------------------------------
/* 
      Подсчитайте количество дубликатов
      Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр,
      не зависящих от регистра, 
      которые встречаются во входной строке более 
      одного раза.
      Можно предположить, 
      то входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры
 */

/* function duplicateCount(text) {
      let res = 0,
            obj = {};
      text.toLowerCase()
            .split("")
            .map((str) => {
                  if (!obj.hasOwnProperty(str)) {
                        obj[str] = 0;
                  } else {
                        if (obj[str] === 0) {
                              res += 1;
                        }
                        obj[str] = obj[str] + 1;
                  }
            });
      return res;
} */
//№23-------------------------------------------
/*
      Рассмотрим массив/список овец, 
      где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, 
      присутствующих в массиве (true означает наличие).
      Например,
      [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
      Правильный ответ будет 17. 
*/
/* 
let arr = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
];

function countSheeps(arrayOfSheep) {
      let count = 0;
      for (let i = 0; i < arrayOfSheep.length; i++) {
            if (arrayOfSheep[i] === true) {
                  count++;
            }
      }
      return count;
}
console.log(countSheeps(arr)); */
//№24-------------------------------------------
/* 
      Учитывая строку цифр, вы должны заменить
      любую цифру ниже 5 на «0»,
      а любую цифру 5 и выше на «1». 
      Верните полученную строку.
      Примечание: ввод никогда не будет пустой строкой 
*/
/* let n = "45385593107843568";

function fakeBin(x) {
      x = x.split("");
      let arr = [];
      for (let i = 0; i < x.length; i++) {
            if (+x[i] < 5) {
                  arr.push(0);
            } else if (+x[i] > +5) {
                  arr.push(1);
            }
      }
      arr = arr.join("");
      return arr;
}
console.log(fakeBin(n));
 */
//№25-------------------------------------------
/*
      Вам будет предоставлен массив aи значение x.
      Все, что вам нужно сделать, это проверить,
      содержит ли предоставленный массив значение.
      Массив может содержать числа или строки. Х может быть любым.
      Возврат true, если массив содержит значение, falseесли нет.
*/
/* let arr = ["t", "e", "s", "t"];
function check(a, x) {
      let bool = 0;
      bool = a.includes(x);
      return bool;
}
console.log(check(arr, "e")); */
//№26-------------------------------------------

/*
      Создайте функцию, которая будет возвращать
      оператор приветствия, использующий ввод;
      ваша программа должна вернуться,
      "Hello, <name> how are you doing today?". 
*/
/* function greet(name) {
      return `Hello, ${name} how are you doing today?`;
} */
//№27-------------------------------------------
/* 
      Учитывая целое число, определите, является ли оно квадратным числом :
      В математике квадратное число или идеальный квадрат — это целое число,
      являющееся квадратом целого числа; другими словами, 
      это произведение некоторого целого числа на самого себя.
      В тестах всегда будет использоваться некоторое целое число,
      так что не беспокойтесь об этом в языках с динамической типизацией. 
 */
/* let num = 4;
num = Math.sqrt(num);
console.log(num);
console.log(Number.isInteger(num));
 */
//№28-------------------------------------------
/*
      Создайте функцию, которая возвращает сумму двух наименьших 
      положительных чисел для заданного массива минимум из 4 положительных целых чисел.
      Не будут переданы числа с плавающей запятой или неположительные целые числа.
      Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
 */
/* let numbers = [19, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {
      numbers = numbers.sort((a, b) => a - b);
      numbers = numbers[0] + numbers[1];
      return numbers;
} */

//№29-------------------------------------------
/*
      Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
      Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины,
      и false в любом другом случае.
      (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми). 
*/
/* function isTriangle(a, b, c) {
      let arr = [a, b, c];
      arr = arr.sort((a, b) => a - b);
      if (arr[0] + arr[1] > arr[2]) {
            return true;
      }
      return false;
}
console.log(isTriangle(1, 6, 2)); */
//№30-------------------------------------------
/* 
      Завершите функцию, которая принимает строковый параметр и 
      переворачивает каждое слово в строке. Все пробелы в строке 
      должны быть сохранены.
      Примеры
      "This is an example!" ==> "sihT si na !elpmaxe"
      "double  spaces"      ==> "elbuod  secaps" 
*/
/* let str = "sihT si na !elpmaxe";
str = str.split([" "]);

for (let i = 0; i < str.length; i++) {
      str[i] = str[i].split("").reverse();
      str[i] = str[i].join("");
}
str = str.join(" ");
console.log(str);
 */
//№31-------------------------------------------
/* 
      В этом простом задании вам дается число, 
      и вы должны сделать его отрицательным. 
      А может быть, число уже отрицательное? 
      Число может быть уже отрицательным,
      и в этом случае никаких изменений не требуется.
  */
/* let n = 0.23;

function minNum(num) {
      if (num > 0) {
            num = num - num * 2;
      }
      return num;
}
console.log(minNum(n)); */
//32 ---------------------------------
/* 
      Напишите функцию , persistenceкоторая 
      принимает положительный
      параметр numи возвращает его
      мультипликативную постоянство,
      то есть количество раз, которое вы должны умножить на цифры, 
      numпока не получите одну цифру.
*/
/* function persistence(num) {
      if (num.toString().length === 1) return 0;

      let count = 1;
      let n = num.toString().split("");
      for (let i = 0; i < n.length; i++) {
            count *= parseFloat(n[i]);
      }
      return 1 + persistence(parseFloat(count));
}

console.log(persistence(999), persistence(25), persistence(4)); */
// 33 --------------------------------
