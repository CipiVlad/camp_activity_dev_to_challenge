import Toastify from 'toastify-js'

const submitButton = document.getElementById('submit-button')


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    Toastify({
        text: "thanks for your submission!",
        duration: 8000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();


})