document.querySelector('#btnRegister').addEventListener('click', (event) => {
    handle_registration()
    fetch("components/create_or_join.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/create_or_join.js';
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divContent').innerHTML = html;
    })
    .catch(error => console.error("Error fetching create/join page:", error));
});

function handle_registration() {
    const strUsername = document.querySelector('#txtUsername').value
    const strPassword = document.querySelector('#txtPassword').value

    console.log(strUsername)
}



