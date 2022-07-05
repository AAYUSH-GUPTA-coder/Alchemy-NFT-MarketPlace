// const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  // const [deployer] = await ethers.getSigners();
  // const balance = await deployer.getBalance();
  const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();
  const data = {
    address: marketplace.address,
    abi: JSON.parse(marketplace.interface.format("json")),
  };

  console.log(`address of contract: ${marketplace.address}`);

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync("./src/Marketplace.json", JSON.stringify(data));

  // console.log("Sleeping.....");
  // // Wait for etherscan to notice that the contract has been deployed
  // await sleep(20000);

  // // Verify the contract after deploying
  // await hre.run("verify:verify", {
  //   address: marketplace.address,
  //   constructorArguments: [],
  // });
}

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
