document.querySelector('#btnRegister').addEventListener('click', (event) => {
    
    if (handle_registration()) {
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
    }
    
});

function handle_registration() {
    const baseUri = 'http://localhost:8080'

    const strUsername = document.querySelector('#txtUsername').value
    const strPassword = document.querySelector('#txtPassword').value

    // construct a JSON obj that will be sent to the registration API
    const user = {
        username: strUsername,
        password: strPassword
    }
    console.log(user)

    // make the API call
    fetch(baseUri + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        else {
            console.log(response)
            return response
        }
    })
    .then(result => {
        console.log('Success: ', result)
        return true
    })
    .catch(error => {
        console.error('Error: ', error)
        return false
    })

}



