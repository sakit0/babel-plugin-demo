const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default;

const ast = parse(`
const a = 1
`);

console.log(generate(ast).code);
