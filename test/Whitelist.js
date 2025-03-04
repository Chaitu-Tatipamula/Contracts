const {expect} = require('chai')
const {ethers} = require('hardhat')

describe("WhiteList Contract",()=>{
    let deployedContract;
    beforeEach(async()=>{
        const contract = await ethers.getContractFactory("WhiteList")
        deployedContract = await contract.deploy(10);
    })

    describe('Deployment', () => { 
        it('Sets maximum number of Whitelistings', async()=>{
            expect(await deployedContract.maxWhitelistings()).to.equal(10)
        })

        it('Initialize the number of whitelistings to 0', async()=>{
            expect(await deployedContract.numOfWhitelistings()).to.equal(0)
        })
        
    })

    describe('Checking functionality', () => { 
        it('check the mapping', async()=>{
            expect(await deployedContract.alreadyWhitelisted("0x271a475513Fc38Bf44981a874Fbec7b3Fc61c471")).to.equal(false)
        })

        it('Add the address to WHitelist', async()=>{
            const tx = await deployedContract.whitelistTheAddress()
            await tx.wait()

            expect(await deployedContract.numOfWhitelistings()).to.equal(1)
        })
     })
})