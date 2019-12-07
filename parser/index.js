const { parse } = require("@babel/parser");

const ast = parse(`
const a = 1
`);

console.log(JSON.stringify(ast, null, 2));
