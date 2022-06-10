import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers);

async function connect() {
    if(typeof window.ethereum != "undefined") {
        await window.ethereum.request({method: "eth_requestAccounts"})
        connectButton.innerHTML = "Connected!"
    } else{
        connectButton.innerHTML = "please install metamask"
    }
}

async function fund(ethAmount) {
    console.log(`funding with ${ethAmount}....`);
    if (typeof window.ethereum != "undefined") {
        //provider / connection to the blockchain
        // signer / wallet / someone with some gas

        // contract we are interacting with

        //ABI & Address
    }
}