function bigNumAdd(a='', b=''){
    let maxLen = Math.max(a.length, b.length)
    a = a.padStart(maxLen,'0');
    b = b.padStart(maxLen, '0');

    let forward = 0;
    let ret = '';
    for(let i = maxLen - 1; i >= 0; i--){
        let currentSum = Number(a[i]) + Number(b[i]) + forward;
        forward = Math.floor(currentSum/10);
        ret = `${currentSum%10}${ret}`;

    }
    if(forward == 1) ret = `1${ret}`;

    return ret;
}

console.log(bigNumAdd('9007199254740991', '1234567899999999999'))