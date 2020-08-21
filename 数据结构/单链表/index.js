// 节点
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// 单链表
// 头节点
// 查找
// 插入
// 删除
class LinkedList {
    constructor(){
        this.HEAD = 'head'
        this.head = new Node(this.HEAD);
    }

    // 时间复杂度O(n)
    find(target){
        let ret = this.head;
        while(ret && ret.data !== target){
            ret = ret.next
        }
        return ret
    }

    /**
     * 头插法
     * @param {*} data 插入的数据
     * @param {*} position 插入的位置， 默认从最前面插入
     */
    headInsert(data, position){
        let target = this.find(position || this.HEAD);
        const newNode = new Node(data);
        newNode.next = target.next;
        target.next = newNode;
    }

    /**
     * 
     * @param {*} data 插入的数据
     * @param {*} position 插入的位置，默认从最后面插入
     */
    tailInsert(data, position){
        let realTarget = this.head
        let findPos = this.find(position);
        if(findPos){
            realTarget = findPos
        }else{
            while(realTarget.next){
                realTarget = realTarget.next
            }
        }
        const newNode = new Node(data);
        newNode.next = realTarget.next;
        realTarget.next = newNode;
    }

    /**
     * 
     * @param {*} position 删除数据的位置
     */
    delete(position){
        let del = this.find(position);
        if(del){
            let parent = this.head;
            let prev = null 
            while(parent.next && !prev){
                if(parent.next.data === del.data){
                    prev = parent
                }else{
                    parent = parent.next
                }
            }
            prev.next = del.next
            return del
        }
        return null
    }

    display(){
        const ret = [];
        let target = this.head
        while(target && target.next){
            target = target.next
            ret.push(target.data)
        }
        return ret
    }
}


const list = new LinkedList();

// 头插入
// list.headInsert('a')
// list.headInsert('b')
// list.headInsert('c', 'b')
// console.log(list)
// console.log(list.display())

// 尾插入
list.tailInsert('1')
list.tailInsert('2')
list.tailInsert('3')
list.tailInsert('4', '2')
console.log(list)
console.log(list.delete('2'))
console.log(list.display())