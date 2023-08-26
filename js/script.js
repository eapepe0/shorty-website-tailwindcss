const input = document.getElementById('link-input')
const form = document.getElementById('link-form')
const error = document.getElementById('error-message')

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}


// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

form.addEventListener('submit', formSubmit)

function formSubmit(e) {
    e.preventDefault()

    if (input.value === '') {
        error.innerHTML = 'Por favor ingresa algo...';
        input.classList.add('border-red');
    } else if (!validURL(input.value)) {
        error.innerHTML = 'Por favor ingresa una URL correcta...';
        input.classList.add('border-red');
    } else {
        error.innerHTML = '';
        input.classList.remove('border-red');
        alert("Success")
    }

}