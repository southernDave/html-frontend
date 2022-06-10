const ConnectButton = document.getElementById("connectButton")


async function connect() {
    if(typeof window.ethereum != "undefined") {
        await window.ethereum.request({method: "eth_requestAccounts"})
        ConnectButton.innerHTML = "Connected!"
    } else{
        ConnectButton.innerHTML = "please install metamask"
    }
}