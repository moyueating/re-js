// 实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路


function convert(rgbColor){
    let match = rgbColor.match(/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/);
    let rgbArr = [match[1], match[2], match[3]];
    return rgbArr.map(item => {
        // let r16 = Number(item).toString(16);
        // return r16.length == 2 ? r16 : `0${r16}`;
        // 或者
        return Number(item).toString(16).padStart(2, '0')
    }).reduce((pre, current) => pre + current, '#').toUpperCase()
}

console.log(convert('rgb(11,255,23)'));