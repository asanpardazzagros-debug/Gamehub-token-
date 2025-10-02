const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GameHubLogoNFT", function () {
  it("Should mint an NFT with correct URI", async function () {
    const [owner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("GameHubLogoNFT");
    const nft = await NFT.deploy();
    await nft.waitForDeployment();

    const tokenURI = "ipfs://QmYourCID";
    const tx = await nft.mintLogoNFT(owner.address, tokenURI);
    await tx.wait();

    const uri = await nft.tokenURI(0);
    expect(uri).to.equal(tokenURI);
  });
});