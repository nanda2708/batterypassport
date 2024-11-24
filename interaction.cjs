const Web3 = require('web3');

// Connect to Ganache RPC server
const web3 = new Web3("http://127.0.0.1:7545");

web3.eth.net.isListening()
  .then(() => console.log("Connected to Ganache!"))
  .catch((error) => console.error("Failed to connect:", error));

web3.eth.getAccounts()
  .then(accounts => console.log("Accounts:", accounts))
  .catch(error => console.error("Error fetching accounts:", error));