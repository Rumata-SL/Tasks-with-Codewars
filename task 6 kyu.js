"use strict";
//№ 1 -------------------------------------
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
//№2 ---------------------------------
/*
      Постройте Башню по следующему заданному аргументу:
      количество этажей (целое число и всегда больше 0).
      Башенный блок представлен как* 
*/
/* function buildTower(nFloors) {
      let result = [];

      for (let i = 1; i <= nFloors; i++) {
            result.push(
                  " ".repeat(nFloors - i) +
                        "*".repeat(i * 2 - 1) +
                        " ".repeat(nFloors - i)
            );
      }
      return result;
}
console.log(buildTower(5)); */
//№3 ---------------------------------
