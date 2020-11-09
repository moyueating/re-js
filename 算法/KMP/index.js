function indexOf(origin, target) {
    let pos = -1;
    let count = 0
    for (let i = 0; i < origin.length; i++) {
        if(pos === -1){
            let temp = []
            for (let j = 0; j < target.length; j++) {
                count++
                if(origin[i+j] === target[j]){
                    temp.push(true)
                }else{
                    break;
                }
            }
            if(temp.filter(_ => _).length === target.length){
                pos = i;
            }
            
        }

    }
    console.log('执行次数',count)
    return pos;
}