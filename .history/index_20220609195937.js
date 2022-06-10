import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers);

async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
      } catch (error) {
        console.log(error)
      }
      connectButton.innerHTML = "Connected"
      const accounts = await ethereum.request({ method: "eth_accounts" })
      console.log(accounts)
    } else {
      connectButton.innerHTML = "Please install MetaMask"
    }
  }

async function fund(ethAmount) {
    console.log(`funded with ${ethAmount}....`);
    if(typeof window.ethereum !== "undefined"){
        //provider
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        //signer
        const signer = provider.getSigner()
        //contract we are interacting with
        //ABI & Address
        
    }
}