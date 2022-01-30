"use strict";

//Напишите число в развернутой форме.
/* 
      Вам будет дано число, и вам нужно будет 
      вернуть его в виде строки в расширенной форме . Например:
      expandedForm(12); // Should return '10 + 2'
      expandedForm(42); // Should return '40 + 2'
      expandedForm(70304); // Should return '70000 + 300 + 4'
*/
/*
function expandedForm(num) {
      num = num
            .toString()
            .split("")
            .reverse()
            .map((a, i) => a * Math.pow(10, i))
            .filter((a) => a > 0)
            .reverse()
            .join(" + ");
      return num;
}
console.log(expandedForm(1002));
 */
