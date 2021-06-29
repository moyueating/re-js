// 如何模拟实现 Array.prototype.splice


Array.prototype.mySplice = function(start, deletecount, ...addList){
    if(Math.abs(start) > this.length) start = 0;
    if(start < 0) start = this.length + start;
    let result = [];

    for(let i = start; i < start + deletecount; i++){
        result.push(this[i]);
        delete this[i];
    }

    for(let item of addList){
        this.push(item)
    }
    let arr = this.filter(_ => _);
    this.length = 0;
    arr.forEach((v, i) => this[i] = v);
    return result
}

let a = [1,2,3,4,5];
console.log(a.mySplice(0, 1), a);