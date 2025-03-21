// document.querySelector('#btnClickMe').addEventListener('click', (event) => {
//     fetch("components/registration.html")
//     .then(response => response.text())
//     .then(html => {
//         // const objScript = document.createElement('script');
//         // objScript.src = 'js/chart.js'; 
//         // objScript.type = 'text/javascript';
//         // document.head.appendChild(objScript);
//         // objScript.onload = () => {
//         //     distillCourses(arrCourseInfo)
//         //   };
//         document.querySelector('#divContent').innerHTML = html;
//     })
//     .catch(error => console.error("Error fetching registration:", error));
// });

document.querySelector('#btnRegister').addEventListener('click', (event) => {
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



