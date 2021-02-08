
// 遍历的前中后就是按照访问根节点的前中后来判断的

class Node {
  constructor(key){
    this.key = key
    this.left = null
    this.right = null
  }
}

// 向树中插入一个新的键
function insertNode(node, newNode) {
  if(newNode.key < node.key){
    if(node.left === null){
      node.left = newNode
    }else{
      insertNode(node.left, newNode)
    }
  }else{
    if(node.right === null){
      node.right = newNode
    }else{
      insertNode(node.right, newNode)
    }
  }
}

// 通过先序遍历方式遍历所有节点
// 先序遍历先访问节点本身，然后左侧节点，最后右侧节点
function preOrderTraverseNode(root, callback) {
  if(root !== null){
    callback(root.key)
    preOrderTraverseNode(root.left, callback)
    preOrderTraverseNode(root.right, callback)
  }
}

// 通过中序遍历方式遍历所有节点
// 中序遍历先访问左侧节点，然后节点本身，最后右侧节点
function inOrderTraverseNode(root, callback) {
  if(root !== null){
    inOrderTraverseNode(root.left, callback)
    callback(root.key)
    inOrderTraverseNode(root.right, callback)
  }
}

// 通过后序遍历方式遍历所有节点
// 后序遍历，先访问左侧节点，后访问右侧节点，最后节点本身
function postOrderTraverseNode(root, callback) {
  if(root !== null){
    postOrderTraverseNode(root.left, callback)
    postOrderTraverseNode(root.right, callback)
    callback(root.key)
  }
}

function minNode(node){
  if(node){
    while (node && node.left) {
      node = node.left 
    }
    return node.key
  }
  return null
}

function findMinNode(node){
  if(node){
    while (node && node.left) {
      node = node.left 
    }
    return node
  }
  return null
}

function maxNode(){
  if(node){
    while(node && node.right){
      node = node.right
    }
    return node.key
  }
  return null
}

function searchNode(node, key){
  if(node === null){
    return false
  }
  if(key < node.key){
    return searchNode(node.left, key)
  }else if(key > node.key){
    return searchNode(node.right, key)
  }else{
    return true
  }
}

function removeNode(node, key) {
  if(node === null){
    return null
  }
  if(key < node.key){
    node.left = removeNode(node.left, key)
    return node 
  }else if(key > node.key){
    node.right = removeNode(node.right, key)
    return node
  }else{
    // 作图很好理解
    // 第一种情况——一个叶节点
    if(node.left === null && node.right === null){
      node = null // 将当前这个节点删除设置为null
      return node // 将这个节点返回，将指向这个节点的节点的指针置空
    }

    // 第二种情况——一个只有一个子节点的节点
    if(node.left === null){
      node = node.right
      return node
    }else if(node.right === null){
      node = node.left
      return node
    }

    // 第三种情况-- 一个有两个子节点的节点
    var aux = findMinNode(node.right)
    node.key = aux.key
    node.right = removeNode(node.right, aux.key) 
    return node
  }

}


// 树类
class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(key) {
    if(this.root === null){
      this.root = new Node(key)
    }else{
      insertNode(this.root, new Node(key))
    }
    return this
  }

  preOrderTraverse() {
    preOrderTraverseNode(this.root, function(key) {
      console.log(key)
    })
  }

  inOrderTraverse() {
    inOrderTraverseNode(this.root, function(key) {
      console.log(key)
    })
  }

  postOrderTraverse() {
    postOrderTraverseNode(this.root, function(key){
      console.log(key)
    })
  }

  min() {
    return minNode(this.root)
  }

  max() {
    return maxNode(this.root)
  }

  search(key) {
    return searchNode(this.root, key)
  }

  remove(key) {
    this.root = removeNode(this.root, key)
  }

}