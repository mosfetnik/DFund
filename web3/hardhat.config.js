

/** @type import('hardhat/config').HardhatUserConfig */
export const networks = {};
export const solidity = {
  version: "0.8.17",
  defaultNetwork: "sepolia",

  networks: {
    hardhat: {},
    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: "dc8f24caa0aff93d61fe7832b6644b1d6e65e27a1ebd77d7d7a067a1e1a6e1f9",
    },
  },

  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
