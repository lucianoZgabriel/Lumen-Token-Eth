import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Lumen", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Lumen = await hre.ethers.getContractFactory("Lumen");
    const lumen = await Lumen.deploy();

    return { lumen, owner, otherAccount };
  }

  it("Should test", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    expect(true).to.be.true;
  });
});
