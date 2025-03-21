document.querySelector('#btnCreateChatRoom').addEventListener('click', (event) => {
    fetch("components/chat_room.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/chat_room.js';
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divContent').innerHTML = html;
    })
    .catch(error => console.error("Error fetching chat room:", error));
});