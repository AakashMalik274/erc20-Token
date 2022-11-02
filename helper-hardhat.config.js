const deploymentChains = ["hardhat", "localhost"]

const networkConfig = {
    31337: {
        name: "localhost",
        initialSupply: "5000000",
    },
    5: {
        name: "goerli",
        initialSupply: "100000000",
    },
}

module.exports = { deploymentChains, networkConfig }
