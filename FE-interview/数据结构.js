// 栈 先进后出
// https://leetcode-cn.com/problems/valid-parentheses/solution/
// 匹配有效的括号
function isvalid(s){
  let map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3,
  }
  let stack = []
  for(let i=0; i<s.length; i++){
    let cur = s[i]
    if(map[cur] < 0){
      stack.push(cur)
    }else{
      let pre = stack.pop()
      if(map[pre] + map[cur] !== 0){
        return false
      }
    }
  }
  if(stack.length > 0) return false
  return true
}
