//! 1-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function toqSonlar(arg) {
//     let count = 0;
//     for (const i of arg) {
//         if (i % 2 == 1) {
//             count += 1
//         }
//     }
//     return count
// }

// console.log(toqSonlar(arr));

//! 2-misol \\\

// let str = 'salom23hayr'

// function numberDel(arg) {
//     let res = []
//     for (const i of arg) {
//         if (i > 0) {
//             res.push(i)
//         }
//     }
//     return res
// }

// console.log(numberDel(str));

//! 3-misol \\\

// let str = 'salom jigar'

// function countStr(arg) {
//     let res = arg.split(' ')
//     console.log(res);

//     return res.length
// }
// console.log(countStr(str));

//! 4-misol

// let arr = [10, 2, 3, 4, 5,]

// function minElement(arg) {
//     let min = arg[0]

//     for (const i of arg) {
//         if (min > i) {
//             min = i
//         }
//     }
//     return min
// }

// console.log(minElement(arr));

//! 5-misol \\\

// let ism = 'azizbek salom'

// function teskariIsm(arg) {
//     let res = []

//     for (let i = arg.length - 1; i >= 0; i--) {
//         res.push(arg[i])
//     }
//     return res.join(' ')
// }

// console.log(teskariIsm(ism));

//! 7-misol \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function sortArray(arg) {
//     let res = arg.sort(function (a, b) {
//         return b - a
//     })
//     return res
// }

// console.log(sortArray(arr));

//! 8-misol \\\

// let str = 'ishlar qalay oshna'
// let name = 'osh'

// function slice1(arg, name) {
//     let res = ''
//     if (arg.includes(name)) {
//         res = arg.split(name)
//     }
//     return res.join(' ')
// }

// console.log(slice1(str, name));

//! 9-misol \\\

// let arr = ['salom', 'harli', 'kun']

// function arrayToUpperCase(arg) {
//     let res = []
//     for (const i of arg) {
//         res.push(i.toUpperCase())
//     }
//     return res.join(' ')
// }

// console.log(arrayToUpperCase(arr));

//! 10-dars \\\

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function toqSonlar(arg) {
//     let res = []
//     for (const i of arg) {
//         if (i % 2 == 1) {
//             res.push(i)
//         }
//     }
//     return res
// }

// console.log(toqSonlar(arr));

//! 11-misol \\\

// let arr = ['salom', 'harli', 'kun']

// function engUzunElement(arg) {
//     let leng = ''
//     for (const i of arg) {
//         if (leng.length < i.length) {
//             leng =  i
//         }
//     }
//     return leng
// }

// console.log(engUzunElement(arr));

//! 12-misol \\\

// let arr = [1, 2, 3, 4, 5]

// function sum(arg) {
//     let sum = 0
//     for (const i of arg) {
//         sum += i
//     }
//     return sum
// }

// console.log(sum(arr));

//! 13-misol \\\

// let arr = [-1, 2, 3, -4, 5, 6, -7, 8, -9]

// function removeManfiy(arg) {
//     let res = []
//     for (const i of arg) {
//         if (i > 0) {
//             res.push(i)
//         }
//     }
//     return res
// }

// console.log(removeManfiy(arr));

//! 14-misol \\\

// let arr = ['salom', 'hayr', 'kun']

// function arrayLength(arg) {
//     let res= []
//     for (const i of arg) {
//         res.push(i.length)
//     }
//     return res
// }

// console.log(arrayLength(arr));

//! 15-misol \\\

// let arr = [1, 2, 3, 4, 5]

// function arrayKvadrati(arg) {
//     let res = []
//     for (const i of arg) {
//         res.push(i**2)
//     }
//     return res
// }

// console.log(arrayKvadrati(arr));

//! 17-misol \\\

// let arr = [1, 2, 3, 4, 5]
// function teskariArray(arg) {
//     let res = []
//     for (const i of arg) {
//         res.unshift(i)
//     }
//     return res
// }

// console.log(teskariArray(arr));

//! 18-misol \\\

// let arr = ['qalay','assalom','salom', 'hayr', 'kun']

// function str(arg) {
//     let res = []
//     res.push((arg.sort()).join(' '))
//     return res.join(' ')
// }

// console.log(str(arr));

//! 19-misol \\\

// function str1(arg) {
//     let res = arg.split(' ');

//     let res2 = res.map(e => e.split('').sort().join(''));

//     return res2.join(' ');
// }

// let str = "salom dunyo";
// console.log(str1(str));

//! 20-misol \\\

// let str = 'salom ishlar qalay'
// let resArray = str.split(' ')

// let res = resArray.map(function(v){
//     return v[0].toUpperCase() + v.slice(1);
// })

// console.log(res.join(' '));

//! 21-misol \\\

// let str = 'salom ishlar qalay'

// function removeProbel(arg) {
//     let res = arg.split(' ')
//     return res.join('')
// }

// console.log(removeProbel(str));

//! 22-misol \\\ 

// let str = 'salom ishlar qalay'

// function teskariSoz(arg) {
//     let res = arg.split(' ');

//     let res2 = res.map(e => e.split('').reverse().join(''));

//     return res2.join(' ');
// }

// console.log(teskariSoz(str));

//? metodlarsiz ishlanishi

// function teskariSoz(arg) {
//     let res = '';
//     let res2 = '';

//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] !== ' ') {
//             res2 = arg[i] + res2;
//         } else {
//             res += res2 + ' ';
//             res2 = '';
//         }
//     }

//     res += res2;
//     return res;
// }

// let str = "salom dunyo";
// console.log(teskariSoz(str));

//! 23-misol \\\

// function wordLengths(arg) {
//     let res = [];
//     let res2 = 0;

//     for (const i of arg) {
//         if (i !== ' ') {
//             res2++;
//         } else {
//             if (res2 > 0) {
//                 res.push(res2);
//                 res2 = 0;
//             }
//         }
//     }

//     if (res2 > 0) {
//         res.push(res2);
//     }

//     return res;
// }

// let str = 'salom ishlar qalay'
// console.log(wordLengths(str));
