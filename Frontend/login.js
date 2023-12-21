window.onload = function() {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    let json = getJsonFromForm(event.target);

    let apiCall = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    }

    fetch('API-Rout', apiCall)
        .then(res => res.json());
}

function getJsonFromForm(form) {
    let formData = new FormData(form);
    let object = Object.fromEntries(formData);
    return JSON.stringify(object);
}