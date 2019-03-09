// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)


// 参考链接 
// http://www.ruanyifeng.com/blog/2018/07/indexeddb.html
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

// 几个概念
// 数据库 IDBDatabase对象 
// 对象仓库 IDBObjectStore对象， 类似于关系型数据库的表格
// 数据记录 对象仓库保存的是数据记录。每条记录类似于关系型数据库的行，但是只有主键和数据体两部分。主键用来建立默认的索引，必须是不同的，否则会报错。主键可以是数据记录里面的一个属性，也可以指定为一个递增的整数编号。
// 索引 为了加速数据的检索，可以在对象仓库里面，为不同的属性建立索引。
// 事务 IDBTransaction对象，数据的读写和删改都要经过事务，事务对象提供error、abort和complete三个事件，用来监听操作结果。

// 特点
// 1、键值对储存
// 2、异步
// 3、支持事务
// 4、同源限制
// 5、储存空间大
// 6、支持二进制储存

let db
// 打开数据库
const request = window.indexedDB.open('testDB', 1)

request.onerror = function(event){
  console.log(event)
  console.log('无法使用indexedDB')
}

request.onsuccess = function(event){
  db = event.target.result
  console.log('你打开了indexedDB')

  // let info = {
  //   id: 1,
  //   name: 'zkj',
  //   age: 27,
  //   email: '123@qq.com'
  // }
  // add(info)
}

request.onupgradeneeded = function(event){
  console.log('onupgradeneeded')
  let objectStore
  db = event.target.result
  if(!db.objectStoreNames.contains('students')){
    // objectStore = db.createObjectStore('students', { autoIncrement: true })
    objectStore = db.createObjectStore('students', { keyPath: 'id' })
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('age', 'age', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
  }
}

// 新增数据
function add(data) {
  const transaction = db.transaction(['students'], 'readwrite')
  const objectStore = transaction.objectStore('students')
  const req = objectStore.add(data)

  req.onsuccess = function() {
    console.log('数据写入成功')
  }
  req.onerror = function(e) {
    console.log('数据写入失败')
  }
} 

// 批量新增
function addAll() {
  const infos = [{
    id: 2,
    name: 'Bob',
    age: 24,
    email: '123@qq.com'
  }, {
    id: 3,
    name: 'john',
    age: 17,
    email: '1456@qq.com'
  }, {
    id: 4,
    name: 'bob',
    age: 45,
    email: '34556@qq.com'
  }]
  infos.forEach(item => {
    add(item)
  })

}

//  读取数据
function read(key) {
  let transaction = db.transaction(['students'])
  let objectStore = transaction.objectStore('students')
  let req = objectStore.get(key)

  req.onsuccess = function(event) {
    const result = event.target.result
    if(result){
      console.log(result)
    }else{
      console.log('未获得数据记录')
    }
  }
  req.onerror = function() {
    console.log('读取数据失败')
  }
}

// 遍历数据
function readAll() {
  let objectStore = db.transaction('students').objectStore('students')
  // console.log(objectStore.count())
  objectStore.openCursor().onsuccess = function(event) {
    // console.log(event)
    const cursor = event.target.result;
    if(cursor){
      console.log(cursor.value)
      cursor.continue()
    }else{
      console.log('没有更多数据了')
    }
  }
}

// 更新数据
function update(){
  const updateInfo = {
    id: 1,
    name: 'zkj123',
    age: 27,
    email: '456@qq.com'
  }
  let req = db.transaction(['students'], 'readwrite')
    .objectStore('students')
    .put(updateInfo)

  req.onsuccess = function(event) {
    console.log(event)
    console.log('数据更新成功')
  }
  req.onerror = function(event) {
    console.log(event)
    console.log('数据更新失败')
  }

}

// 删除数据
function remove() {
  var req = db.transaction(['students'], 'readwrite')
    .objectStore('students')
    .delete(1);

  req.onsuccess = function (event) {
    console.log('数据删除成功');
  };
}


// 使用索引
function referenceKey(key, value) {
  const transaction = db.transaction('students', 'readonly')
  const store = transaction.objectStore('students')
  const index = store.index(key)
  var req = index.get(value);

  req.onsuccess = function (e) {
    var result = e.target.result;
    console.log(result)
  }
}

// 索引和游标结合使用
let referenceData = []
function referenceAll() {
  const transaction = db.transaction('students', 'readonly')
  const store = transaction.objectStore('students')
  const index = store.index('name')


  var singleKeyRange = IDBKeyRange.only("Bob");

  var req = index.openCursor(singleKeyRange)
  req.onsuccess = function(event) {
    const cursor = event.target.result;
    if(cursor){
      console.log(cursor.value)
      referenceData.push(cursor.value)
      cursor.continue()
    }else{
      console.log('没有更多数据了')
    }
  }

  // store.getAll().onsuccess = function(event) {
  //   console.log(event.target.result)
  // }
}






