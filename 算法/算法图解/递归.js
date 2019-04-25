// 分而治之，递归求和
function sum(arr=[]){
  if(arr.length === 0) return 0
  return arr[0] + sum(arr.splice(1))
}
// 尾调优化
function sum(arr=[], total=0){
  if(arr.length === 0) return total
  total += arr[0]
  return sum(arr.splice(1), total)
}

// 递归求最大值
function max(arr=[]){
  if(arr.length === 1) return arr[0]
  let first = arr[0]
  let rest = arr.splice(1)
  let _max = max(rest) 
  return first >= _max ? first : _max
}