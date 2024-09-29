// Эффект всплытия страницы при загрузке
window.onload = function() {
    document.body.classList.add('loaded'); // Добавляем класс 'loaded' для плавного появления
    
    // Плавное открытие/закрытие ответов в FAQ
    const questions = document.querySelectorAll('.question');

    questions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;

            // Скрываем все ответы
            const allAnswers = document.querySelectorAll('.answer');
            allAnswers.forEach(a => {
                if (a !== answer) {
                    a.style.maxHeight = null; // Закрыть другие ответы
                }
            });

            // Открываем или закрываем текущий ответ
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Закрыть
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Открыть
            }
        });
    });
};

// Функция для переключения секций по навигации (для поддержки якорей)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Модальное окно
const modal = document.getElementById('contact-form-modal');
const btn = document.getElementById('contact-form-btn');
const span = document.querySelector('.close-btn');

btn.onclick = function() {
    modal.style.display = 'flex';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// script.js

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburgerBtn.classList.toggle("active");
    });
});



// Анимация счетчиков
const counters = document.querySelectorAll('.number');
const speed = 200; // Скорость анимации

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
