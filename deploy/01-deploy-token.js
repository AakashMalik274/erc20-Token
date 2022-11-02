const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat.config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const { deploy } = deployments

    const initialSupply = networkConfig[network.config.chainId].initialSupply

    console.log(initialSupply)

    const args = [initialSupply]

    const OurToken = await deploy("OurToken", {
        from: deployer,
        args: args,
        log: true,
    })
}

module.exports.tags = ["all", "deploy"]
