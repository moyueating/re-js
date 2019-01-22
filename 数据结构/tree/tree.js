
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
function preOrderTraverseNode(root, callback) {
  if(root !== null){
    callback(root.key)
    preOrderTraverseNode(root.left, callback)
    preOrderTraverseNode(root.right, callback)
  }
}

// 通过中序遍历方式遍历所有节点
function inOrderTraverseNode(root, callback) {
  if(root !== null){
    inOrderTraverseNode(root.left, callback)
    callback(root.key)
    inOrderTraverseNode(root.right, callback)
  }
}

// 通过后序遍历方式遍历所有节点
function postOrderTraverseNode(root, callback) {
  if(root !== null){
    postOrderTraverseNode(root.left, callback)
    postOrderTraverseNode(root.right, callback)
    callback(root.key)
  }
}

function minNode(node){
  if(node === null){
    return null
  }
  while (node && node.left) {
    node = node.left 
  }
  return node.key
}

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

}