import Web3 from 'web3';

let web3;

// Check if we are in the browser and MetaMask is available
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Use MetaMask's provider
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("User denied account access.");
  }
} else {
  // Fallback to a local Ganache instance
  const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
  web3 = new Web3(provider);
}

export default web3;