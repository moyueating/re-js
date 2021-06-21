let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];


function convert(list){
    let result = [];
    let ids = [];
    let map = list.reduce((pre, current) => {
        ids.push(current.id);
        pre[current.id] = current;
        return pre
    }, {})
    for(let item of list){
        if(!ids.includes(item.parentId)){
            result.push(item);
            continue;
        }
        if(item.parentId in map){
            const parent = map[item.parentId];
            parent.children = parent.children || [];
            parent.children.push(item);
        }
    }
    return result;
}
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.resolve(__dirname, './result.json'), JSON.stringify(convert(list)), {
    encoding: 'utf-8'
})