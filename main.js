import Toastify from 'toastify-js'

const activitySelect = document.querySelector('#activity-select')
const foodAllergies = document.querySelector('#food-allergies')
const additionalInfo = document.querySelector('#additional-info')
const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', (e) => {

    const data = {
        activity: activitySelect.value,
        food_allergies: foodAllergies.value,
        additional_info: additionalInfo.value
    }

    console.log('form submitted successfully to /submit-form', data)

    e.preventDefault()
    Toastify({
        text: "thanks for your submission! We'll get back to you soon!",
        duration: 20000,
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