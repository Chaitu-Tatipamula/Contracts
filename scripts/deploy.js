const hre = require('hardhat')

async function main(){

  const contract = await hre.ethers.deployContract("PPTToken",[100000])
  await contract.waitForDeployment();

  console.log("Contract deployed at : ",contract.target);

  console.log("Waiting 30 seconds before verification...")
  await new Promise(resolve => setTimeout(resolve, 30000));
  
  await hre.run("verify:verify",{
    address : contract.target,
    constructorArguments : [100000]
  })

  const invoiceContract = await hre.ethers.deployContract("MedInvoiceContract",[contract.target])
  await invoiceContract.waitForDeployment();

  console.log("Contract deployed at : ",invoiceContract.target);

  console.log("Waiting 30 seconds before verification...")
  await new Promise(resolve => setTimeout(resolve, 30000));
  
  await hre.run("verify:verify",{
    address : invoiceContract.target,
    constructorArguments : [contract.target]
  })

}


main()
.then(()=>{process.exit(0)})
.catch((error)=>{
  console.log(error);
  process.exit(1);
})