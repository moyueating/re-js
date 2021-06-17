// 深度优先遍历，从父元素一直往下找直到当前元素没有子元素

let parent = document.querySelector('.parent');
let ret = [];

// 递归
function dfs(root){
    ret.push(root.className);
    let children = root.children;
    for(let i = 0; i < children.length; i++){
        if(children[i].children){
            dfs(children[i])
        }
    }
    return ret;
}
console.log(dfs(parent))

// 非递归，利用栈先进后出
let result = [];
function dfs2(root){
    let stack = [root];
    while(stack.length){
        let dom = stack.pop()
        result.push(dom.className);
        let children = dom.children;
        // 这里为了输出顺序需要反着遍历
        if(children.length){
            for(let i = children.length - 1; i >= 0; i--){
                stack.push(children[i]);
            }
        }
    }
    return result;
}
console.log(dfs2(parent))