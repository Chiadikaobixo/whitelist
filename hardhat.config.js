require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const INFURA_URL = process.env.INFURA_URL;

const MNEMONICPHRASE = process.env.MNEMONICPHRASE;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [MNEMONICPHRASE],
    },
  },
};