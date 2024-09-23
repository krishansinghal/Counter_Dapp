# Introduction

It is a simple Dapp, use for the increment of the counter. It is built using the react, javascript and solidity. deployed on the Polygon zkEVM network.

## General Setup


1) Clone the repo locally
```shell
git clone 
```

Install dependencies and start react app

```shell
cd Polygon zkEVM
npm i
npm start
```

- create  a `.env` file and Update .env to set your ACCOUNT_PRIVATE_KEY environment variable.


- Compile your contract code

```shell
npx hardhat compile
```

```shell
npx hardhat run scripts/deploy-counter.js --network zkEVM
```
