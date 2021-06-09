// https://github.com/jawil/blog/issues/32


function render(template, context){
  return template.replace(/{{(.*?)}}/g, (match, key) => {
    return context[key]
  })
}

const template = "{{name}}很厉{name}害，才{{age}}岁";
const context = { name: "zkj", age: "25" };

console.log(render(template, context));
