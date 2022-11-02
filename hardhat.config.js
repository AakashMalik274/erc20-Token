require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        localhost: {
            chainId: 31337,
            url: "http://127.0.0.1:8545/",
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            url: GOERLI_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            5: 0,
            31337: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
        },
    },
}
