let str = '1234567890';

function format(data){
    return data.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
}

console.log(format(str))

function zzz(str){
    let arr = str.split('');
    let result = JSON.parse(JSON.stringify(arr));
    let start = arr.length % 3;
    for(let i = start - 1; i < arr.length - 1; i += 3){
        result[i] = result[i] + ',';
    }
    return result.join('');
}
console.log(zzz('1234567'))

function sleep(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

// sleep(2000).then(() => {
//     console.log('2s后我醒了')
// })

async function sleep2(time){
    await sleep(time)
    console.log('4s后我醒了')
}
sleep2(4000)