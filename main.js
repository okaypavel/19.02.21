// const numberTab = [1, 2, 3, 42, 15, 61, 7, 832, 9, 554]
// numberTab.push(55)
// const tab1 = ["qq", "we", "qw", "ty"]
// numberTab.push(tab1)
// let strUniv = 21 + 1
// numberTab.push(strUniv)
// console.log(numberTab)

// let sequFibo = [0, 1]
// while (sequFibo.length<13) {
//   sequFibo[sequFibo.length] = sequFibo[sequFibo.length-1] + sequFibo[sequFibo.length-2]; 
// }
// console.log(sequFibo);

// const fibo = new Array(0, 1);
// function fibocr() {
//     console.log(fibo)
//     for (let i = 1; i < fibo.length; i++) {
//         console.log(fibo[i])
//         if (fibo[i] > 88) {
//             return
//         }
//         if (fibo[i] + fibo[i - 1] === 1) {
//             fibo.push(2)
//         } else {
//             fibo.push(fibo[i] + fibo[i - 1])
//         }
//     }
// }
// fibocr()
// console.log(fibo)

// const liczbyDo199 = new Array();
// function add() {
//     for (let i = 0; i < 100; i++) {
//         liczbyDo199.push(i)
//     }
// }
// add()
// console.log(liczbyDo199)
// function dell() {
//     for (let i = 0; i < 100; i++) {
//         liczbyDo199.pop(i)
//     }
// }
// dell()
// console.log(liczbyDo199)


const liczbyDo19 = new Array();
function add() {
    for (let i = 1; i < 100; i++) {
        liczbyDo19.push(i)
    }
}
add()
liczbyDo19.reverse()
console.log(liczbyDo19)


// let indexLiczby45
// console.log(liczbyDo19)
// liczbyDo19.forEach((item, index) => {
//     if(item === 45) {
//         indexLiczby45 = index
//     }
// })
// console.log(indexLiczby45, liczbyDo19[54])

let tabl = liczbyDo19.every(item => item > 5);
console.log(tabl)
