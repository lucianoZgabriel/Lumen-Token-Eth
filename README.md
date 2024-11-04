# Lumen Token (LMN) - ERC-20

Lumen is an ERC-20 token developed for the Ethereum network. This project was built using Hardhat, with scripts for deploying on a local node and on the Sepolia testnet. It also includes a package for contract verification on Etherscan.

## Table of Contents

- [About the Project](#-about-the-project)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Environment Setup](#-environment-setup)
- [Installation](#installation)
- [Deployment](#-deployment)
  - [Local Deployment](#local-deployment)
  - [Sepolia Testnet Deployment](#sepolia-testnet-deployment)
- [Contract Verification on Etherscan](#etherscam-verification)
- [Testing](#-testing)
- [License](#-license)
- [Author](#-author)

## 📜 About the Project

The Lumen (LMN) is a basic ERC-20 token implemented in Solidity. The contract defines standard transfer and approval functionalities, following the ERC-20 standard.

**Token Details:**
- Name: Lumen
- Symbol: LMN
- Decimals: 18
- Total Supply: 1000 LMN

## 🛠️ Technologies Used

- [Hardhat](https://hardhat.org/): Framework for smart contract development.
- [TypeScript](https://www.typescriptlang.org/): Used for scripts and deployment configuration.
- [Ethers.js](https://docs.ethers.io/v5/): Interaction with the Ethereum blockchain.
- [Etherscan](https://etherscan.io/): Contract verification.

## 📂 Project Structure

- **`Lumen.sol`**: ERC-20 token implementation in Solidity.
- **`hardhat.config.ts`**: Hardhat configuration file, including networks, Solidity version, and Etherscan API.
- **`package.json`**: Scripts for testing, compiling, and deploying the contract.

## ⚙️ Environment Setup

This project uses environment variables to configure deployment on external networks. Create a `.env` file with the following variables:

```env
INFURA_URL=<Your_Infura_URL_for_Sepolia>
SECRET=<Your_wallet_mnemonic>
API_KEY=<Your_Etherscan_API_Key>
```
## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/lumen-token.git
cd lumen-token
```
2. Install dependencies:
```
npm install
```
3. Compile the contract:
```
npm run compile
```

## 🚀 Deployment

### Local Deployment

To run a local node and deploy the contract on localhost:

1. Start the Hardhat local node:
```
npm run start
```
2. In a new terminal tab, execute the deployment:
```
npm run deploy:local
```

### Sepolia Testnet Deployment
1. Create a `.env` file in the project root directory and add the following environment variables:
```
INFURA_URL=<your-infura-url>
SECRET=<your-wallet-mnemonic>
API_KEY=<your-etherscan-api-key>
```
To deploy on the Sepolia testnet, ensure that the `.env` file is correctly configured. Then, run:
```
npm run deploy:testnet
```
## Etherscan Verification
After deploying the Lumen token contract, you can verify the contract on Etherscan using the following command:
```
npx hardhat verify --network sepolia <contract-address>
```

## 🧪 Testing

To run the contract tests:
```
npm test
```

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Developed by Luciano Zanin Gabriel.

---

**Note:** This project is for educational purposes and should not be used in production without additional audits and testing.
