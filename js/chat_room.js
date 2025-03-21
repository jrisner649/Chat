const wsUri = "ws://127.0.0.1/";
const output = document.querySelector("#output");
const websocket = new WebSocket(wsUri);
let pingInterval;

document.querySelector('#btnSendMessage').addEventListener('click', (e) => {
    const message = document.querySelector('#txtMessage').value
    sendMessage(message)
})

function writeToScreen(message) {
    output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
}

function sendMessage(message) {
    writeToScreen(`SENT: ${message}`);
    websocket.send(message);
}

websocket.onopen = (e) => {
    writeToScreen("CONNECTED");
};

websocket.onclose = (e) => {
    writeToScreen("DISCONNECTED");
    clearInterval(pingInterval);
};

websocket.onmessage = (e) => {
    writeToScreen(`RECEIVED: ${e.data}`);
};

websocket.onerror = (e) => {
    writeToScreen(`ERROR: ${e.data}`);
};