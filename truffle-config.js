// truffle-config.js
module.exports = {
  plugins: [solidity-coverage],
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // Ganache default port
      network_id: "*",
    },
    test: {
      host: "127.0.0.1",
      port: 8545, // Ganache default port
      network_id: "*",
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};