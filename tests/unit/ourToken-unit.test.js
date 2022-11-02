const { network, getNamedAccounts } = require("hardhat")
const { deploymentChains } = require("../../helper-hardhat.config")

!deploymentChains.includes(network.name)
    ? describe.skip
    : describe("OurToken Unit Test", () => {
          let ourToken, deployer, user1
          beforeEach(async () => {
              const accounts = await getNamedAccounts()
              deployer = accounts.deployer
              user1 = accounts.user1
          })
      })
