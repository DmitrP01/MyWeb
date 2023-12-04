function openFrame(url) {
    var frame = document.getElementById('frame');
    frame.src = url;
    frame.style.display = 'block';
}

// Добавьте функцию для закрытия окна, если необходимо
function closeFrame() {
    var frame = document.getElementById('frame');
    frame.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.fixed-header');
    var sidebar = document.querySelector('.sidebar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('fixed');
            sidebar.classList.add('scrolled');
        } else {
            header.classList.remove('fixed');
            sidebar.classList.remove('scrolled');
        }
    });
});