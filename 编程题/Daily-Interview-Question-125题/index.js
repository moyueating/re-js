// 如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重）


function convert(data){
    let map = data.reduce((pre, current) => {
        pre[current.id] = current
        return pre;
    }, {})
    let result = [];
    for(let item of data){
        if(!item.pId){
            result.push(item)
        }else{
            target = map[item.pId];
            target.children = target.children || [];
            target.children.push(item);
        }
    }
    return result
}



console.log(JSON.stringify(convert([{id: 1}, {id: 2, pId: 1}, {id: 4, pId: 1},{id: 3, pId: 2}])))