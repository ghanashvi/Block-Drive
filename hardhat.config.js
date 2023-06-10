require("@nomicfoundation/hardhat-toolbox");


const ALCHEMY_API_KEY = "ims5Xe9uhlNcQ1pZelmPrV9OTLWiTMO6";


const SEPOLIA_PRIVATE_KEY = "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};