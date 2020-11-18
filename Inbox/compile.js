const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

//Compilation of the code
//console.log(solc.compile(source,1)); //1 here defines how many different number of contracts to compile

module.exports = solc.compile(source,1);
