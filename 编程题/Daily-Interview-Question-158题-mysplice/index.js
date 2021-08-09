// 如何模拟实现 Array.prototype.splice


Array.prototype.mySplice = function(start, deletecount, ...addList){
    if(Math.abs(start) > this.length) start = 0;
    if(start < 0) start = this.length + start;
    let result = [];

    for(let i = start; i < start + deletecount; i++){
        result.push(this[i]);
    }

    let addCount = addList.length;
    let step = 0;
    if(addCount > deletecount){
        step = addCount - deletecount;
        let tail = this.slice(start+deletecount);
        let i = start + deletecount;
        while(tail.length){
            this[i+step] = tail.shift();
        }
    }
    for(let i = start; i < start + deletecount + step; i++){
        this[i] = addList.shift()
    }
    let arr = this.filter(_ => _);
    this.length = 0;
    arr.forEach((v, i) => this[i] = v);
    return result
}

let a = [1,2,3,4,5,6];
console.log(a.mySplice(2, 3, 7), a);
// console.log(a.mySplice(2, 2, 7,8,9), a);