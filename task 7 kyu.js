"use strict";
// Регулярное выражение проверяет PIN-код
/* 
      Банкоматы позволяют использовать 4- или 6-значные PIN-коды,
      а PIN-коды не могут содержать ничего,
      кроме ровно 4 или ровно 6 цифр.
      Если функции передана допустимая строка PIN-кода,
      верните true, иначе верните false.
      Примеры ( Ввод --> Вывод)
      "1234"   -->  true
      "12345"  -->  false
      "a234"   -->  false 
*/
/* 
function validatePIN (pin) {
      return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
} 
*/
//2 ---------------------
/* 
      Учитывая массив единиц и нулей, преобразуйте
      эквивалентное двоичное значение в целое число.
      Например: [0, 0, 0, 1]рассматривается 
      как 0001двоичное представление 1.
 */
/* const binaryArrayToNumber = (arr) => {
      arr = arr.join("").toString(2);
      arr = parseInt(arr, 2);
      return arr;
};
let num = binaryArrayToNumber([1, 1, 1, 1]);
console.log(num); */
