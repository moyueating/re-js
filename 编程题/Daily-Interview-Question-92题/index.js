// 第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id

let data = [
    {
        id: 1,
        name: '上海市',
        children: [
            {
                id: 11,
                name: '浦东新区',
                children: [
                    {
                        id: 21,
                        name: '张江镇',
                        children: [
                            {
                                id: 31,
                                name: '张江园区'
                            }
                        ]
                    },
                    {
                        id: 22,
                        name: '金桥镇',
                        children: [
                            {
                                id: 32,
                                name: '金桥广场',
                                children: [
                                    {
                                        id: 41,
                                        name: '街道'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 12,
                name: '长宁区',
                children: [
                    {
                        id: 23,
                        name: '新泾镇',
                        children: [
                            {
                                id: 33,
                                name: '临空'
                            },
                            {
                                id: 34,
                                name: '建滔广场'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

// dfs
// function allPath(data){
//     let paths = []
//     function computePath(data, path){
//         data.forEach(item => {
//             let _path = [...path];
//             _path.push(item.id);
//             if(item.children && item.children.length){
//                 computePath(item.children, _path);
//             }else{
//                 paths.push(_path);
//             }
//         })
//     }
//     computePath(data, paths);
//     return paths;
// }

// console.log(allPath(data));


// bfs
function allPath2(data, target){
    let result = [];
    let queue = [];
    let path_queue = [];
    data.forEach(item =>{
        queue.push(item);
        path_queue.push([item.id])
    })

    while(queue.length){
        let first = queue.shift();
        let path = path_queue.shift();
        if(target === first.id){
            queue = [];
            result = path
            continue;
        }
        if(first.children){
            first.children.forEach(kid => {
                queue.push(kid);
                path_queue.push([...path, kid.id]);
            })
        }

    }

    return result;
}

console.log(allPath2(data, 33));

