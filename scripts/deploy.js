const hre = require('hardhat')

async function main(){

  const contract = await hre.ethers.deployContract("WhiteList",[10])
  await contract.waitForDeployment();

  console.log("Contract deployed at : ",contract.target);

  await hre.run("verify:verify",{
    address : contract.target,
    constructorArguments : [10]
  })

}


main()
.then(()=>{process.exit(0)})
.catch((error)=>{
  console.log(error);
  process.exit(1);
})