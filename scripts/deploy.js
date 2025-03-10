const hre = require('hardhat')

async function main(){

  const contract = await hre.ethers.deployContract("PPTToken",[1000])
  await contract.waitForDeployment();

  console.log("Contract deployed at : ",contract.target);

  await hre.run("verify:verify",{
    address : contract.target,
    constructorArguments : [1000]
  })

}


main()
.then(()=>{process.exit(0)})
.catch((error)=>{
  console.log(error);
  process.exit(1);
})