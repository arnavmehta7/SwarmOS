# AI-Powered On-Chain Interaction

## Overview
We simplify on-chain interactions using AI Agents, enabling users to seamlessly execute transactions, swaps, and other blockchain operations. Users can connect their Base Wallet and directly run queries to perform various tasks such as fetching balances, analyzing transactions, interacting with DeFi protocols, and deploying smart contracts.

## Features
- **Fetch Balances**: Retrieve balances of any wallet address.
- **Analyze Transactions**: Understand and track recent transactions.
- **TheGraph Integration**: Query liquidity, pools, and transactions related to UniSwap v3.
- **DeFi & Protocol Support**: Integrated with Morpho, Pyth, Social, Superfluid, and WoW.
- **Smart Contract Operations**: Deploy contracts, NFTs, and tokens.
- **Request Faucet Funds**: Easily access testnet funds.
- **Mint NFTs**: Create and manage NFTs.
- **Perform DeFi Actions**: Execute complex financial transactions effortlessly.

## AgentKit Enhancements
We extended **AgentKit (Coinbase)** and contributed open-source PRs to:
- Fetch balances of any wallet instead of just system balances.
- Integrate **The Graph x UniSwap v3** for enhanced DeFi analytics.
- Retrieve historical transaction data.

## Frontend Portal
We developed a **Vite-React** portal where users can:
- Connect their **Coinbase Wallet** (or fund it if needed).
- Directly execute queries and perform blockchain operations from the UI.

## Installation & Usage
### Prerequisites
- **Node.js** (>=16)
- **Yarn or npm**

### Setup
```sh
# Clone the repository
git clone https://github.com/your-repo/ai-onchain-agent.git
cd ai-onchain-agent

# Install dependencies
yarn install  # or npm install

# Start the development server
yarn dev  # or npm run dev
```

## Contributing
We welcome contributions! Feel free to submit PRs for enhancements, bug fixes, or new features.

## License
MIT License

