require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env.local" });

const privatekey = process.env.privateKey;

// const ALCHEMY_API_KEY_URL_MUMBAI =
//   process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_URL_MUMBAI;
const ALCHEMY_API_KEY_URL_GOERLI =
  process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_URL_GOERLI;

// const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: ALCHEMY_API_KEY_URL_MUMBAI,
    //   accounts: [privatekey],
    // },
    // matic: {
    //   url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
    //   //accounts: [process.env.privateKey]
    // },
    goerli: {
      url: ALCHEMY_API_KEY_URL_GOERLI,
      accounts: [privatekey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
