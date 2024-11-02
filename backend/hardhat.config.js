require("@nomicfoundation/hardhat-toolbox");

YOUR_PRIVATE_KEY = 'bb259a28439ca71de344bf1f9e31da71d482abbea4333a71cb78966d41b21e8b'

module.exports = {
    solidity: "0.8.27",
    networks: {
        nibiru: {
            url: "https://evm-rpc.devnet-3.nibiru.fi",
            accounts: [YOUR_PRIVATE_KEY] // Use a private key from your MetaMask
        }
    }
};
