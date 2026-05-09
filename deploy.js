const hre = require("hardhat");

async function main() {
  const MusicCopyright = await hre.ethers.getContractFactory("MusicCopyright");
  const musicCopyright = await MusicCopyright.deploy();

  await musicCopyright.waitForDeployment();

  console.log(
    `MusicCopyright deployed to: ${await musicCopyright.getAddress()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
