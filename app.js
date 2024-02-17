/*
* Filter Number or String or etc From An Array
--------------------------------------------
let ka = [1,"r",4,"e"]
function filter_list(ka) {
  return ka.filter(function (v) {
    return typeof v == "string";
  });
}
*/

/*
* Square Every Digit
-------------------- 
Ex: from 923 to 8149 
function squareDigits(a) {
  let b = a.toString();
  let c = b.split("");
  let d = c.map((e) => {
    return parseInt(e) * parseInt(e);
  });
  let e = d.join("");
  let f = parseInt(e);
  return f;
}
*/

/*
* Reverse String
--------------
let a = "agku";
function kata(a) {
  let b = a.split("");
  let d = b.reverse();
  let c = d.join("");
  return c;
}
*/

/*
* Sum of Odd Numbers 
------------------
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
Calculate the sum of the numbers in the nth row of this triangle
1; //0 = 1 ----------> 1/1 = 1
3, 5; //1 = 8 ----------> 8/2 = 4
7, 9, 11; //2 = 27 ----------> 27/3 = 9
13, 15, 17, 19; //3 = 64 ----------> 64/4 = 16
*/

/*
* Shortest Word
-------------
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
*/

/*
* Array.diff
------------
let a = [1,2,3];
let b = [1,2];
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
*/

/* 
* Categorize New Member
---------------------
let data = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
*/

/*
* SortOdd 
Ex: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
----------------------------------------
let a = [11, 1, 2, 8, 5, 4, 3];
function sortOdd(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
*/

/*
* CheckNarcissisticNumber? True or False
---------------------------------------
Apa itu bilangan narsistic?
Mari kita ambil angka 1634. Jumlah digit dari 1634 adalah 4. Masing-masing digit 1, 6, 3, dan 4 ditingkatkan ke pangkat 4 (jumlah digit), yaitu: 1^4 + 6^4 + 3^4 + 4^4. Hasilnya adalah 1 + 1296 + 81 + 256 = 1634. Itulah bilangan narsistic.
function narcissistic(value) {
  let r = 0;
  let x = value.toString().split("").length;
  let y = value
    .toString()
    .split("")
    .map((e) => parseInt(e) ** x);
  y.forEach((m) => {
    r += m;
  });
  return r == value && true;
}
*/

/*
* Equal Sides Of An Array
-------------------------
Let's say you are given the array [1,2,3,4,3,2,1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ([1,2,3]) and the sum of the right side of the index ([3,2,1]) both equal 6.
const arr1 = [1, 2, 3, 4, 3, 2, 1];
function findBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
    console.log(rightSum)
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
*/

/*
* Split Strings 
---------------
'abcdef' => ['ab', 'cd', 'ef']
function splitStringIntoPairs(str) {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }
  return pairs;
}
*/

/*
* Break camelCase
----------------
Ex: "camelCasingHaha"  =>  "camel Casing Haha"
let a = "camelCasingHaha"
function solution(string) {
  return string.replace(/([A-Z])/g, " $&");
}
*/

/*
* Binary to Decimal
-------------------
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9

let arr = [1, 0, 0, 0, 0, 1];
const binaryArrayToNumber = (arr) => {
  let b = [...arr];
  b.reverse();
  let arra = [];
  for (let i = 0; i < arr.length; i++) {
    arra.push(b[i] == 1 ? 2 ** i : 0);
  }
  return arra.reduce((acc, curr) => acc + curr, 0);
};
*/

/*
* Duplicate Encoder
-------------------
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
let a = "gaHeAh"
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
*/

/*
* Biner ke Hexadesimal
----------------------
const a = [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0];
function binerKeHexadecimal(str) {
  let modEmpat = str.length % 4;
  if (modEmpat !== 0) {
    for (let k = 0; k < 4 - modEmpat; k++) {
      str.unshift(0);
    }
  }
  let strBalik = [...str];
  strBalik.reverse();
  const empat = [];
  for (let i = 0; i < strBalik.length; i += 4) {
    empat.push(strBalik.slice(i, i + 4));
  }
  const bungkus = [];
  for (let j = 0; j < strBalik.length / 4; j++) {
    bungkus.push(empat[j]);
  }
  let hasilHexa = [];
  for (let l = 0; l < bungkus.length; l++) {
    bungkus[l].map((a, i, w) => {
      let angkaKecil = [2, 4, 8];
      i == 0 && a == 1 ? hasilHexa.push(1) : hasilHexa.push(0),
        i !== 0 && a == 1
          ? hasilHexa.push(angkaKecil[i - 1])
          : hasilHexa.push(0);
    });
  }
  const empatBaru = [];
  for (let m = 0; m < hasilHexa.length; m += 8) {
    empatBaru.push(hasilHexa.slice(m, m + 8).reduce((a, b) => a + b, 0));
  }
  for (let n = 0; n < empatBaru.length; n++) {
    switch (empatBaru[n]) {
      case 10:
        empatBaru[n] = "A";
        break;
      case 11:
        empatBaru[n] = "B";
        break;
      case 12:
        empatBaru[n] = "C";
        break;
      case 13:
        empatBaru[n] = "D";
        break;
      case 14:
        empatBaru[n] = "E";
        break;
      case 15:
        empatBaru[n] = "F";
        break;
    }
  }
  const hexaJadi = empatBaru.reverse().join("");
  return hexaJadi;
}
*/

/*
const decimal = parseInt(10100101, 2);   //parameter parseInt(kode biner, 2) //memberitahu Javascript bahwa angka yang dimasukkan adalah biner
const hex = decimal.toString(16).toUpperCase();
*/

/*
* The Hashtag Generator
-----------------------
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:
It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Ex:
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
function generateHashtag(str) {
  let tag = "#";
  let capitalize = str
    .split(" ")
    .map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))
    .join("");
  let joinString = capitalize.replace(/\s/g, "");
  let result = tag + joinString;
  let isSpace = result.indexOf(" ");
  let final = isSpace && result.length - 1 == 0 || result.length > 140 ? false : result;
  return final;
}
*/

/*
* ASCII Fun #1: X- Shape
------------------------
function x(n) {
  let a = ``;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j == i || j + i == n - 1) {
        a += `■`;
      } else {
        a += `□`;
      }
    }
    a += `\n`;
  }
  return a.trim();
}
*/

//mix("Are they here", "yes, they are here"), "2:eeeee/2:yy/=:hh/=:rr"

/* 
* Menghitung Jumlah Huruf 
-------------------------
let h = ["q", "e", "e", "r"];
let i = {};
h.forEach((e) => {
  console.log(i[e]=(i[e]||0)+1);
});
console.log(i);
*/

/*
* Take a Ten Minutes Walk
-------------------------
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
} 
*/

/*
* Funny Dots 
------------
function dot(n, m) {
  let stringOne = `+---`;
  let pointOne = `| o `;
  let result = "";
  m = m * 2 + 1;
  for (let j = m; j > 0; j--) {
    for (let k = n; k > 0; k--) {
      if (j % 2 != 0) {
        result += stringOne;
      } else {
        result += pointOne;
      }
    }
    if (j % 2 != 0) {
      result += "+";
    } else {
      result += "|";
    }
    result += "\n";
  }
  return result.trim();
}
*/

/*
* Two Sum 
---------
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let res = numbers[i] + numbers[j];
      if (res == target) {
        return [i, j];
      }
    }
  }
}
*/

/*
* Karya Gabriel 
---------------
let doctitle= document.title;
window.addEventListener("blur",()=>{
  document.title= "balik dong :D";
})
window.addEventListener("focus",()=>{
  document.title=doctitle;
})
*/

/*
* Multiple 3 or 5
-----------------
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
*/
/* 
git add . 
git commit -m "nama perubahan/penambahan file"
git push origin main/master
*/
