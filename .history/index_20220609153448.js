

async function connect() {
    if(typeof window.ethereum != "undefined") {
        await window.ethereum.request({method: "eth_requestAccounts"})
        document.getElementById("connectButton").innerHTML = "Connected!"
    } else{
        document.getElementById("connectButton").innerHTML = "please install metamask"
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