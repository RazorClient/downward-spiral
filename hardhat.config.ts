import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: { enabled: true, runs: 1_000_000 },
      viaIR: true,
    },
  },
};

export default config;
