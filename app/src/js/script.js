const page = document.querySelector('body');
const errorClassName = 'error';

/**
 * @param {string} email 
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

if (page.id === 'contacts-page') {
    const form = document.getElementById('contact-form');
    const emailWrap = form.querySelector('.email-wrap');
    const emailInput = emailWrap.querySelector('input');
    const textarea = form.querySelector('textarea');
    
    function onSubmit(e) {
        e.preventDefault();
    
        const email = emailInput.value;
        const message = textarea.value;
    
        if (!validateEmail(email)) {
            emailWrap.classList.add(errorClassName);
            return;
        }
    
        emailWrap.classList.remove(errorClassName);
        alert(`submitting the form with email: ${email} and message: ${message || 'no message was received'}`);
    }
    
    form.addEventListener('submit', onSubmit);
}


const subscribeForm = document.getElementById('subscribe-form');

if (subscribeForm) {
    const emailWrap = subscribeForm.querySelector('.email-wrap');
    const emailInput = emailWrap.querySelector('input');

    function onSubmit(e) {
        e.preventDefault();
    
        const email = emailInput.value;
    
        if (!validateEmail(email)) {
            emailWrap.classList.add(errorClassName);
            return;
        }
    
        emailWrap.classList.remove(errorClassName);
        alert(`submitting the form with email: ${email}`);
    }
    
    subscribeForm.addEventListener('submit', onSubmit);
}