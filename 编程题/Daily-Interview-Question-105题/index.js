let url1 = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33'
let url2 = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33'
let url3 = 'https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33'

function queryMatch(url,key){
    let reg = new RegExp(`(?<=${key}=)(\\d+,?)*`)
    return url.match(reg)
}

console.log(queryMatch(url3, 'elective'))



// hack
console.log(new URLSearchParams(url3).getAll('elective'))