import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form').email,
    message: document.querySelector('.feedback-form').message,
}

// Записываем значения в локальное хранилище =====================================================

let FeedbackData;

const saveFeedbackDataToLocalStorage = (e) => {
    
    FeedbackData = {
        email: refs.email.value,
        message: refs.message.value,
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(FeedbackData));
}

refs.form.addEventListener('input', throttle(saveFeedbackDataToLocalStorage, 500));

// Возвращаем значения в форму =====================================================

if (localStorage.getItem('feedback-form-state')) {    
    refs.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    refs.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}

// Обрабатываем событие Submit =====================================================

const onSubmitFormEvent = (e) => {

    if (localStorage.getItem('feedback-form-state')) {
        localStorage.removeItem('feedback-form-state');
    }

    FeedbackData = {
        email: refs.email.value,
        message: refs.message.value,
    }

    if (FeedbackData.email || FeedbackData.message) {
        console.log(FeedbackData);
    } else {
        window.alert('The form is not completed! You need to fill it!');
    }

    refs.form.reset()
}

refs.form.addEventListener('submit', onSubmitFormEvent);
