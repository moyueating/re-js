// https://github.com/jawil/blog/issues/32



function render(template, context){
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    if(/\.|\[(.*?)\]/.test(match)){
      let ks = match.split(/[\.\[\]\{\}]/).filter(_ => _);
      return ks.reduce((pre, current, index) => {
        return pre[current];
      }, context)
    }
    return context[key]
  })
}

const template = "{{name}}很厉{name}害，才{{age}}岁, {{test.icon[1]}}";
const context = { name: "zkj", age: "25", test: {
  icon: [1,'hhhhhh',3,4]
} };

console.log(render(template, context));


// 对称的符号
let hash = {
  "(": ")",
  "{":"}",
  "[":"]"
}
function isValid(str){
  if(str.length%2 !== 0){
    return false;
  }else{
    let arr = str.split('');
    let result = true;
    while(arr.length){
      if(hash[arr.shift()] !== arr.pop()){
        result = false;
        break
      }
    }
    return result;
  }
}