document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
