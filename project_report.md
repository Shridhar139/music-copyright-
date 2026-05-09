# Project Report: Web3 Music Copyright and Royalty Management System

## 1. Introduction
The digital music industry faces significant challenges related to piracy, unauthorized distribution, and opaque royalty distributions. The **Web3 Music Copyright System** is a decentralized web application (dApp) developed to provide a transparent, immutable, and verifiable platform for musicians. Utilizing Ethereum-based Smart Contracts and IPFS (InterPlanetary File System), this system allows artists to securely register their music, prove ownership mathematically, and receive direct royalty payments from fans or licensees without the need for central intermediaries or record labels.

## 2. Motivation
Traditional music distribution platforms and intermediary agencies often consume a significant percentage of an artist's revenue (sometimes up to 80%). Furthermore, proving original ownership in cases of copyright infringement is a prolonged and legally expensive process. The motivation behind this project is to return the power and revenue back to the creators. By integrating blockchain technology, we can create a trustless ecosystem where an artist's ownership is cemented on an immutable ledger, and royalties are transferred out instantly and efficiently.

## 3. Objectives
- **Immutable Registration**: Enable artists to register their music files via IPFS, linking the unique cryptographic hash to their wallet address on the blockchain.
- **Verification**: Provide a simple interface for anyone to verify the absolute original owner of a piece of music, along with the timestamp of when it was copyrighted.
- **Direct Royalties**: Facilitate instantaneous wallet-to-wallet royalty payments, allowing fans, film creators, or businesses to pay artists directly for using their music.
- **Decentralization**: Eliminate centralized choke points and middlemen, dropping overhead costs and censorship risks.

## 4. Problem Statement
**"How can we effectively eliminate the centralized intermediaries in the music industry to ensure artists retain full ownership of their copyrighted work and receive 100% of their royalty payments instantly?"** 
Currently, emerging artists lack an affordable and foolproof method of copyrighting their music internationally. Additionally, when royalties are generated, artists suffer from delayed payouts (occurring months later) and massive deductions by publishing houses, distributors, and streaming platforms.

## 5. Required Analysis

### Functional Requirements
- **User Authentication**: Handled via MetaMask wallet pairing.
- **Song Registration**: Users must be able to upload a song to IPFS (via Pinata) and log the returned hash to the Ethereum blockchain alongside title, owner name, and royalty fee.
- **Verification Module**: Users must be able to input an IPFS hash to fetch contract data confirming the artist's wallet, name, and timestamp.
- **Royalty Processing**: The contract must accept native cryptocurrency (`msg.value`) and securely transfer it to the verified owner's address.

### Non-Functional Requirements
- **Security**: The smart contract must protect against re-entrancy and ensure unauthorized users cannot overwrite a registered IPFS hash.
- **Transparency**: All song registrations and payment events must be publicly verifiable on the blockchain explorer.
- **Usability**: The React frontend must abstract the complexities of blockchain, offering a seamless Web2-like user experience.

### Software (S/W) Analysis
- **Frontend**: React.js, Ethers.js
- **Smart Contracts**: Solidity (v0.8.19)
- **Local Blockchain/Testing**: Hardhat Network
- **Storage/Database**: IPFS (Pinata API)
- **Web3 Wallet**: MetaMask

### Hardware (H/W) Analysis
- **Processor**: Intel i3 / AMD Ryzen 3 or higher.
- **Memory**: Minimum 4GB RAM (8GB recommended for running local node and React server simultaneously).
- **Storage**: 100 MB free space for code; internet connection required for IPFS APIs.

## 6. Methodology
This project follows an Agile Software Development Life Cycle:
1. **Requirements Gathering**: Identifying the core pain-points of musicians.
2. **Smart Contract Development**: Writing logic in Solidity to map `ipfsHash` to a `Song` struct. Testing locally via Hardhat (`npm run node`).
3. **IPFS Integration**: Using Pinata to offload heavy audio/metadata files off-chain, solving the issue of expensive blockchain data storage.
4. **Frontend Integration**: Building a React UI that interacts with the Hardhat node via `ethers.js`.
5. **Testing & Deployment**: Iteratively resolving contract reverts, Wallet synchronization errors, and finalizing the UI.

## 7. Existing System
The existing copyright system relies heavily on centralized government copyright offices (which are slow and localized to one country) and Performing Rights Organizations (PROs) like ASCAP or BMI. 
**Drawbacks of Existing Systems:**
- Extremely slow payout periods (quarterly or bi-annually).
- High barrier to entry and fees for independent artists.
- Opaque accounting; artists rarely know exactly how their royalties are calculated.
- Easily prone to international copyright disputes.

## 8. Proposed System
The proposed system replaces the PROs with a **Smart Contract** and centralized databases with **IPFS**.
**Advantages of Proposed System:**
- **Global & Borderless**: A blockchain hash is recognized worldwide instantly.
- **Zero Middleman Fees**: The artist receives 100% of the royalty fee set in the contract.
- **Real-time Settlement**: Payments settle in roughly 15 seconds (Ethereum block time).
- **Tamper-proof**: Once a song is registered to an artist's address, no one (not even the developers) can alter the ownership record.

## 9. Applications
- **Independent Musicians**: Can self-publish and copyright their work before sending it to producers or labels.
- **Content Creators / Filmmakers**: Can quickly locate an artist using a song's hash and pay the required royalty fee to clear the track for video use.
- **Audio Marketplaces**: Can be utilized as the foundational backend for a beat-selling platform or a decentralized Spotify.

## 10. Result and Discussion
The system was successfully deployed on a local Hardhat network. The `registerSong` function accurately linked Pinata IPFS hashes with the MetaMask wallet address of the deployer. Attempting to register an already existing hash successfully reverted with a "Song already registered" error, proving the copyright protection logic works. The `payRoyalty` function accurately transferred WEI from the payer's wallet directly into the artist's tested wallet balance. The integration between React, Ethers.js, and Hardhat achieved the seamless user experience intended.

## 11. Conclusion
The Web3 Music Copyright System successfully demonstrates how blockchain technology can revolutionize Intellectual Property rights. By utilizing Solidity smart contracts, we have created a provably fair, transparent, and immediate system. It shifts the paradigm from requiring trust in a centralized agency to relying on the cryptographic truth of decentralized networks, proving highly beneficial for modern digital creators.

## 12. Further Work (Future Scope)
- **ERC-721 / NFT Integration**: Minting each copyrighted song as an NFT, allowing the copyright itself to be easily bought, sold, or fractionalized among band members.
- **Streaming Micro-payments**: Integrating protocols that allow fans to stream audio directly from IPFS, paying microscopic fractions of a cent per second of listening.
- **Mainnet Deployment**: Migrating the contract from Hardhat localhost to Ethereum Mainnet or Layer 2 solutions like Polygon or Arbitrum to handle real-world traffic with low gas fees.
