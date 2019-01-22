// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)


let db

const request = window.indexedDB.open('testDB', 1)

request.onerror = function(event){
  console.log(event)
  console.log('无法使用indexedDB')
}

request.onsuccess = function(event){
  db = event.target.result
  console.log('你打开了indexedDB')
}

request.onupgradeneeded = function(event){
  let objectStore
  db = event.target.result
  if(!db.objectStoreNames.contains('students')){
    objectStore = db.createObjectStore('students', {
      keyPath: 'id'
    })
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('age', 'age', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
  }
}

function add() {
  const transaction = db.transaction(['students'], 'readwrite')
  const objectStore = transaction.objectStore('students')
  objectStore.add({
    id: 1,
    name: 'zkj'
  })
} 




