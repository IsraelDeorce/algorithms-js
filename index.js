const { euclids } = require('./src/Algorithms/Euclids/euclids');

function init() {
    var args = process.argv.slice(2);
    console.log(euclids({ args }))
};

init();
