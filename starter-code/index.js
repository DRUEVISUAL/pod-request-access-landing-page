
const error = document.querySelector('#invalid_input');

error.style.display = 'none'

document.addEventListener('invalid', (function(){
    return function(e) {
    e.preventDefault();
    };
})(), true);

const invalidInput = () => {
    error.style.display = 'block';
}

