const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;

const ast = parse(`
const a = 1
let c = 3
`);
traverse(ast, {
  VariableDeclaration(path) {
    path.node.kind = "var";
  },
  VariableDeclarator(path) {
    if (path.node.id.name === "a") {
      path.node.id.name = "b";
      path.node.id.init = 2;
    }
  }
});

console.log(generate(ast).code);
