console.log(
    'Selections only unique values: ___new Set___Array.from____Object.entries__/keys,__value____'
);
// const nums = [1, 1, 2];

// function selectUnique(arr) {
//     return Array.from(new Set(arr));
// }

// console.log(selectUnique(nums));
// _______________________________________________
// function inceaseValue(arr) {
//     return Array.from(arr, (item) => item * 2);
//     // 'item - function(!) that increase each! instance in arr
// }

// console.log(inceaseValue(nums));

// ______________________________________________________
// const str = 'abc';
// console.log(Array.from(str));
// ______________________________________________________

// const obj = { a: 'firstName', b: 'secondName' };
// console.log('obj: ', obj);
// const arrayObj = Object.entries(obj);
// console.log('Object.entries(obj): ', arrayObj);
// const arrayObjKeys = Object.keys(obj);
// console.log('Object.keys(obj): ', arrayObjKeys);
// const arrayObjValues = Object.values(obj);
// console.log('Object.values(obj):', arrayObjValues);
console.log('__________________________________________________');

console.log('Rotate elements in Array: ___splice__concat___');
// const arr = [1, 2, 3, 4, 5];
// const rotateArray = (arr, step) => {
//     let arr_delete = arr.splice(step, arr.length - step);
//     const arr_rotate = arr_delete.concat(arr);
//     return arr_rotate;
// };

// console.log(rotateArray(arr, 1));
console.log('__________________________________________________');

console.log('Rotate elements in Array: ___for___)');
// const nums = [0, 1, 2, 3, 4, 5, 6];

// const rotate = (arr, k) => {
//     const new_arr = [];
//     for (let j = 0; j < arr.length; j++) {
//         new_arr[j] = arr[k + j];
//         if (k + j >= arr.length) {
//             new_arr[j] = arr[j + k - arr.length];
//         }
//     }
//     return new_arr;
// };
// console.log(rotate(nums, 6));
console.log('__________________________________________________');

console.log('Is array contains duplicate values: __logic___');
// const arr = [1, 1, 2];
// const isDuplicate = (arr) => {
//     const lengthInitArray = arr.length;
//     let arr_unicue = Array.from(new Set(arr));
//     if (lengthInitArray !== arr_unicue.length) {
//         return true;
//     } else return false;
// };

// console.log(isDuplicate(arr));
console.log('__________________________________________________');

console.log(
    'Pulling non-repeating values from an array ___filter___indexOf____some______'
);
// const arr = [4, 1, 2, 1, 2, 3];
// console.log('Исходный массив - ', arr);

// const arr_unicue = (arr) => {
//     return arr.filter((item, index) => {
//         return arr.indexOf(item) === index;
//     });
// };
// const arr_1 = arr_unicue(arr);
// console.log('Элементы исходного массива без повторений - ', arr_1);

// // Как это работает. filter оставляет те элементы в массиве, которые удовлетворяют колбэк ф-ции.
// // А что в данном случае делает эта ф-ция. В arr.indexOf(item) она ищет указанный элемент (item) в массиве.
// // Если значение найдено, возвращается индекс этого элемента (если нет, возвращается -1).
// // При этом возврат происходит только если найденный индекс ==== index и в чем тут соль.
// // indexOf() работает так, что если есть дудлирующие элементы, то он возвращает индекс первого элемента.
// // Тогда, как в примере, дошли до 1, индекс "1", indexOf() возвращает также "1", условие выполнено,
// // в отфильтрованном массиве остается "1". Фильтр продолжает итерировать массив, на 4 шаге вновь "1",
// // но indexOf(1) возвращает "1", при том что index = 3. Условие равенства не выполнено, "1" на 4 позиции
// // не вносится в отфильтрованнный массив.

// const arr_duble = (arr) => {
//     return arr.filter((item, index) => {
//         return arr.indexOf(item) !== index;
//     });
// };
// const arr_2 = arr_duble(arr);
// console.log('Дублирующие значения - ', arr_2);
// // Здесь все аналогично, только в отфильтрованный массив попадают дублирующие значения (arr.indexOf(item) !== index)

// const results2 = arr_1.filter((item1) =>
//     arr_2.some((item2) => item2 === item1)
// );
// console.log('Только дублированные значения исходного массива', results2);
// //  Здесь похожая ситуация. В отфильтрованный массив попадут только те значения из arr_1,
// // когда колбэк функция выдаст "true". А что делает эта ф-ция arr_2.some((item2) => item2 === item1)
// // метод some проверяет, опять же через колбэк ф-цию, равен ли "некий" элемент в arr_2 элементу в arr_1
// // если равен, то "true", соответственно, item1 "заносится" в результат, иначе нет.
// const results1 = arr_1.filter(
//     (item1) => !arr_2.some((item2) => item2 === item1)
// );
// console.log('Только уникальные значения исходного массива', results1);
// Здесь аналогично, только "true" меняется на "false" и наоборот.
console.log('__________________________________________________');

console.log(
    'Фокусы: [4, 2, 1] -> 421, +1 и обратно в [4, 2, 2] ___join()___replace()___split()__Number()__String()____parseInt()______'
);
// const arr = [4, 1, 2, 1, 2, 3];
// const arr_str = arr.join().replace(/,/g, '');
// const arr_number = Number(arr_str) + 1;
// const arr_number_string = String(arr_number);
// const resalt = arr_number_string.split('').map((item) => {
//     return parseInt(item, 10);
// });
// console.log(arr.join().replace(/,/g, ''));
// console.log(arr_number);
// console.log(resalt);
console.log('__________________________________________________');

console.log('Sort Array decreasing/increase_____arr.sort_________');
// const arr = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30];
// const sortArr = arr.sort((a, b) => {
//     return b - a;
//     // return a - b;
// });
// console.log(sortArr);
console.log('__________________________________________________');

console.log('Sort object_____obj.sort_________ ');
// let users = [
//     { name: 'A', age: 20 },
//     { name: 'B', age: 30 },
//     { name: 'C', age: 10 },
// ];

// console.log(users);
// users.sort((a, b) => (a.age > b.age ? 1 : -1));
// console.log(users);
console.log('__________________________________________________');

console.log(
    'Трансформации объекта в массив и обратно ____Object.entries(obj)____Object.fromEntries(array)______'
);
// Object.entries(obj) - возвращает массив пар ключ/значение для obj.
// Object.keys(obj) - возвращает массив ключей для obj.
// Object.values(obj) - возвращает массив значений для obj.
//  Object.fromEntries(array) - возвращает объект пар ключ/значение для array.

// Например, у нас есть объект с ценами, и мы хотели бы их удвоить:
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
// преобразовать в массив, затем map, затем fromEntries обратно объект
// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );
// console.log(doublePrices);
// ___________________________
// let salaries = {
//   john: 100,
//   Pete: 200,
//   Mary: 50,
// };

// function sumSalaries(arg) {
//   let sum = 0;
//   for (let salary of Object.values(arg)) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));
console.log('__________________________________________________');

console.log('_________new Map_________');
// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук", 50],
// ]);
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   alert(vegetable); // огурец, помидор, лук
// }
// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   alert(amount); // 500, 350, 50
// }
// перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap.entries()) {
//   // то же самое, что и recipeMap.entries()
//   alert(entry); // огурец,500 (и так далее)
// }
// recipeMap.forEach((value, key) => {
//   alert(`${key} = ${value}`);
// });
// Пример с аннаграммами
// function aclean(arr) {
//     let map = new Map();
//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//         map.set(sorted, word);
//     }
//     return Array.from(map.values());
// }
// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// console.log(aclean(arr));
// Логика длинной строки
// let sorted = arr[i] // PAN
//   .toLowerCase() // pan
//   .split("") // ["p","a","n"]
//   .sort() // ["a","n","p"]
//   .join(""); // anp
console.log('__________________________________________________');

console.log('Фокусы с array ______for___________');
// const nums = [2, 7, 11, 15];
// const target = 9;
// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }
// console.log(twoSum(nums, target));
// console.log('Work with strıng');
// const s = ['h', 'e', 'l', 'l', 'o'];
// console.log(s.reverse());
console.log('__________________________________________________');

console.log('Merge array and sort ____filter____concat_____sort');
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
// Need to get: [1, 2, 2, 3, 5, 6]

const merge = function (arr_1, arr_2) {
    let arr_11 = [];
    let arr_22 = [];
    arr_11 = arr_1.filter((item) => item !== 0);
    arr_22 = arr_2.filter((item) => item !== 0);
    arr_11 = arr_11.concat(arr_22);
    return arr_11.sort();
};

console.log(merge(nums1, nums2));
