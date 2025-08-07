let produtos = require('./listaProdutos.json');

module.exports = () => ({
    "produtos": produtos,
});
// npx json-server --watch src/app/mock/index.js index.js --port 3000