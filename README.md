# Instructions

```git clone https://github.com/Chaitu-Tatipamula/Contracts.git```

Setup an env file with these fields
```
RPC_URL=""
PRIVATE_KEY=""
VERIFY_KEY=""
```
And set them with your required RPC and Etherscan Api key of desired network.

To deploy run this command, with –network flag you can modify the destination chain on which the contracts will be deployed and verified
Small hack just change the RPC URL of your desired chain it’ll get deployed there.

```npx hardhat run scripts/deploy.js --network op-mainnet```



# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
