"use strict";
// 1 -------------------------------
/*
      Напишите функцию, которая при задании URL-адреса в виде 
      строки анализирует только доменное имя и возвращает его в виде строки. Например:
      domainName("http://github.com/carbonfive/raygun") == "github" 
      domainName("http://www.zombie-bites.com") == "zombie-bites"
      domainName("https://www.cnet.com") == "cnet"
 */
/* function domainName(url) {
      return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
console.log(domainName("www.xakep.ru")); */
// то же
/* const domainName = (url) =>
      url
            .replace("https://", "")
            .replace("http://", "")
            .replace("www.", "")
            .split(".")[0]; */

// 2 -----------------------------------------
