// 广度优先遍历，优先找到当前元素的子元素并遍历然后继续该逻辑
let parent = document.querySelector('.parent');
let ret = [];

function bfs(root){
    let queue = [root];
    while(queue.length){
        let dom = queue.shift();
        ret.push(dom.className);
        let children = dom.children;
        if(children.length){
            for(let i = 0; i < children.length; i++){
                queue.push(children[i])
            }
        }
    }
    return ret;
}

console.log(bfs(parent));