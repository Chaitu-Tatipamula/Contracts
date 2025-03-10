const hre = require('hardhat')

async function main(){

  const contract = await hre.ethers.deployContract("PPTToken",[1000])
  await contract.waitForDeployment();

  console.log("Contract deployed at : ",contract.target);

  console.log("Waiting 30 seconds before verification...")
  await new Promise(resolve => setTimeout(resolve, 30000));
  
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