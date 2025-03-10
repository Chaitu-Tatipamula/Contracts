require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    "calibnet": {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    "op-sepolia": {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      "calibnet": process.env.VERIFY_KEY,
      "op-sepolia": process.env.VERIFY_KEY
    },
    customChains: [
      {
        network: "calibnet",
        chainId: 314159,
        urls: {
          apiURL: "https://api.calibration.node.glif.io/rpc/v1",
          browserURL: "https://calibration.filfox.info/en"
        }
      },
      {
        network: "op-sepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimism.etherscan.io"
        }
      }
    ]
  }
};