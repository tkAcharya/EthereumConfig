[![Build Status](https://travis-ci.org/sindresorhus/pageres.svg?branch=master)](https://travis-ci.org/sindresorhus/pageres.svg?branch=master)
# EthereumAutomatedCompileDeploymentTest
Compilation , Building , Atomated testing , Deployment of ethereum project. My first project in ethereum using solidity.



### 1. Clone the project 

```sh
$ git clone https://github.com/tkAcharya/Inbox-Ethereum-Code
$ cd Inbox-Ethereum-Code/Inbox
```

### 2. Install the modules required for the project 

```sh
$ npm install
$ npm install --save solc ganache-cli web3 mocha
```
 

### 3. Run the  test file 

```sh
$ npm test
```

NOTE : This should give you a sample of addresses , and should run the basic tests present to verify the compilation and message modification

## Features

- [x] Offline support
- [x] Cross-platform
- [x] Awesome sounds
- [x] No singup/login required
- [ ] Auto launch
- [ ] Auto updates

## Ethereum Code Beautifiers for different editors
- [Atom]( https://atom.io/packages/language-ethereum)
- [Sublime]( https://packagecontrol.io/packages/Ethereum)
- [VSCode]( https://github.com/juanfranblanco/vscode-solidity)
- [Webstorm]( https://plugins.jetbrains.com/plugin/9475-intellij-solidity)
- [VIM]( https://github.com/tomlion/vim-solidity)

Learnt from [Udemy Course Link]( https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### If facing some issues : 

1. Always remove node_modules folder and then do <**node install updates**> to get all the dependencies

2. If facing ganache or web3 related issues (web3 is in constant modification so , use the versioning instead .26)
After that run <**npm install --save mocha ganache-cli web3@1.0.0-beta.26**>

3. Put the console.log and verify if any variable from the compile is coming as undefined.
Now run <npm run test> to verify if the whole code is working


 Basic Terminologies in the Solidity Code : 
 - **Contracts** : this contains .sol file mentioning our contract
 
 - **test** : this contains the test.js file (using some mocha code)
 
 - **package.json** : we keep this inside our root directory (have some script inside it , and it also captures different dependency being used)
 
 - **compile.js** : compiles our soldity files (node compile.js)
 
 - **deploy.js** : script file to take the compiled code and deploy it.
 
 - **Running the tests** : npm run test
