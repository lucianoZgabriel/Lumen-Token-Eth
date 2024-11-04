import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LumenModule = buildModule("LumenModule", (m) => {
  const lumen = m.contract("Lumen");

  return { lumen };
});

export default LumenModule;
