// function flat(arr){
//     let ret = [];
//     for(let i = 0; i < arr.length; i++){
//         let current = arr[i]
//         ret = ret.concat(Array.isArray(current) ? flat(current) : [current])
//     }
//     return ret;
// }

// function flat(arr){
//     let ret = [];
//     while(arr.length){
//         let first = arr.shift();
//         if(Array.isArray(first)){
//             arr = first.concat(arr);
//         }else{
//             ret.push(first)
//         }
//     }
//     return ret;
// }

// console.log(flat([1,[2,3,4,[5,6,7]],[8], 9]))


function debounce(fn, delay, context){
    let timerId = null;
    return function(...args){
        if(timerId){
            clearTimeout(timerId)
        }else{
            timerId = setTimeout(function(){
                fn.call(context, ...args)
            }, delay);
        }
    }
}

function throttle(fn, delay, context){
    let last = null;
    return function(...args){
        let now = +new Date();
        if(!last || now - last > delay){
            fn.apply(context, args);
            last = now;
        }
    }
}

// function reverseStr(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseStr('sszkjha'))


// function format(str){
//     return str.replace(/\d{1,3}(?=(\d{3})+$)/g, (match, p1) => {
//         console.log(match, p1)
//         return match;
//     })
// }

// console.log(format('1234'))

const template = "{{name}}很厉{name}害，才{{age}}岁";
const context = { name: "zkj", age: "25" };
function render(template, data){
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
        console.log(match, key);
        return context[key]
    })
}
console.log(render(template, context))