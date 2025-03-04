require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks : {
    "base-sepolia" : {
      url : process.env.RPC_URL,
      accounts : [process.env.PRIVATE_KEY]
    }
  },

  etherscan : {
    apiKey : {
      "base-sepolia" : process.env.ETHERSCAN_API
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
         apiURL: "https://api-sepolia.basescan.org/api",
         browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  }
};
