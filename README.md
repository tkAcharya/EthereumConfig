# EthereumConfig
Compilation , Building , Atomated testing , Deployment of ethereum project. My first project in ethereum using solidity.


Always remove node_modules folder and then do <node install updates> to get all the dependencies

After that run <npm install --save mocha ganesh-cli web3@1.0.0-beta.26>
Now run <npm run test> to verify if the whole code is working


 --> Contracts : this contains .sol file mentioning our contract
 --> test : this contains the test.js file (using some mocha code)
 --> package.json : we keep this inside our root directory (have some script inside it , and it also captures different dependency being used)
 --> compile.js : compiles our soldity files (node compile.js)
 --> deploy.js : script file to take the compiled code and deploy it.
--> Running the tests : npm run test
