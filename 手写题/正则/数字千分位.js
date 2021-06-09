let str = '1234567890';

function format(data){
    return data.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
}

console.log(format(str))