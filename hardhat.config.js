require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  paths: {
    artifacts: "./src",
  },
  networks: {
    zkEVM: {
      url: `https://api.zan.top/node/v1/polygonzkevm/testnet/public`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
