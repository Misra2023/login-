document.addEventListener("DOMContentLoaded", function () {
    const formWrapper = document.querySelector('.form-wrapper');

    formWrapper.addEventListener("mouseenter", function () {
        formWrapper.classList.add('hover');
    });

    formWrapper.addEventListener("mouseleave", function () {
        formWrapper.classList.remove('hover');
    });
});
