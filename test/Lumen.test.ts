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

  it("Should have correct name", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    const name = await lumen.name();
    expect(name).to.equal("Lumen");
  });

  it("Should have correct symbol", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    const symbol = await lumen.symbol();
    expect(symbol).to.equal("LMN");
  });

  it("Should have correct decimals", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    const decimals = await lumen.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should have correct total supply", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    const totalSupply = await lumen.totalSupply();
    expect(totalSupply).to.equal(1000n * 10n ** 18n);
  });

  it("Should have correct owner balance", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    const balance = await lumen.balanceOf(owner.address);
    expect(balance).to.equal(1000n * 10n ** 18n);
  });

  it("Should transfer tokens", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    await lumen.transfer(otherAccount.address, 100n * 10n ** 18n);
    const ownerBalance = await lumen.balanceOf(owner.address);
    const balance = await lumen.balanceOf(otherAccount.address);
    expect(balance).to.equal(100n * 10n ** 18n);
    expect(ownerBalance).to.equal(900n * 10n ** 18n);
  });

  it("Should not transfer more tokens than balance", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    expect(
      lumen.transfer(otherAccount.address, 1001n * 10n ** 18n)
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
  });

  it("Should approve tokens", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    await lumen.approve(otherAccount.address, 100n * 10n ** 18n);
    const allowance = await lumen.allowance(
      owner.address,
      otherAccount.address
    );
    expect(allowance).to.equal(100n * 10n ** 18n);
  });

  it("Should transfer from", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    await lumen.approve(otherAccount.address, 200n * 10n ** 18n);
    await lumen
      .connect(otherAccount)
      .transferFrom(owner.address, otherAccount.address, 100n * 10n ** 18n);
    const ownerBalance = await lumen.balanceOf(owner.address);
    const balance = await lumen.balanceOf(otherAccount.address);
    const allowance = await lumen.allowance(
      owner.address,
      otherAccount.address
    );
    expect(balance).to.equal(100n * 10n ** 18n);
    expect(ownerBalance).to.equal(900n * 10n ** 18n);
    expect(allowance).to.equal(100n * 10n ** 18n);
  });

  it("Should not transfer from more tokens than allowance", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    await lumen.approve(otherAccount.address, 100n * 10n ** 18n);
    expect(
      lumen
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 101n * 10n ** 18n)
    ).to.be.revertedWith("Insufficient allowance");
  });

  it("Should not transfer from more tokens than balance", async function () {
    const { lumen, owner, otherAccount } = await loadFixture(deployFixture);
    await lumen.approve(otherAccount.address, 100n * 10n ** 18n);
    expect(
      lumen
        .connect(otherAccount)
        .transferFrom(owner.address, otherAccount.address, 1001n * 10n ** 18n)
    ).to.be.revertedWith("Insuficient balance");
  });
});
