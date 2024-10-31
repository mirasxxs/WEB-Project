// Всплывающее окно
document.getElementById("contactButton").addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "none";
});

// Валидация формы
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    if (!email.includes("@")) {
        errorMessage.textContent = "Invalid email address.";
        return false;
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    } else {
        errorMessage.textContent = ""; // Сброс сообщения об ошибке
        alert("Form submitted successfully!");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        return false; // Остановить фактическую отправку формы для примера
    }
}

document.getElementById("colorButton").addEventListener("click", () => {
    // Массив цветов, из которых можно выбрать
    const colors = ["lightblue", "green", "pink", "yellow", "white", "lightcoral", "lightgreen", "lightgray"];
    
    // Случайный индекс из массива цветов
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    // Изменяем цвет фона
    document.body.style.backgroundColor = colors[randomIndex];
});


// Текущая дата и время
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTime").textContent = `Current Date and Time: ${dateTimeString}`;
}

setInterval(displayDateTime, 1000);

// Оценка
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => {
            s.classList.remove('selected');
        });
        star.classList.add('selected');
        document.getElementById('ratingMessage').textContent = `Вы выбрали рейтинг: ${value} звёзд.`;
    });
});

// Смена темы
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Показать текущее время
document.getElementById("showTimeButton").addEventListener("click", () => {
    const now = new Date();
    document.getElementById("timeDisplay").textContent = `Текущее время: ${now.toLocaleTimeString()}`;
});

// Скрытие дополнительного контента
document.getElementById("readMoreButton").addEventListener("click", () => {
    const moreContent = document.getElementById("moreContent");
    moreContent.style.display = moreContent.style.display === "none" ? "block" : "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingMessage = document.getElementById('ratingMessage');
    const changeMessageButton = document.getElementById('changeMessageButton');
    const readMoreButton = document.getElementById('readMoreButton');
    const moreContent = document.getElementById('moreContent');
    const themeToggle = document.getElementById('themeToggle');
    const showTimeButton = document.getElementById('showTimeButton');
    const timeDisplay = document.getElementById('timeDisplay');

    // Система оценок
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.dataset.value;
            stars.forEach(s => {
                s.classList.remove('selected');
                // Заливаем звезды до нажатой
                if (s.dataset.value <= ratingValue) {
                    s.classList.add('selected');
                }
            });
            ratingMessage.textContent = `Вы оценили на ${ratingValue} звезды!`;
        });
    });

    // Кнопка «Показать сообщение»
    changeMessageButton.addEventListener('click', () => {
        alert(ratingMessage.textContent);
    });

    // Кнопка «Читать больше»
    readMoreButton.addEventListener('click', () => {
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            readMoreButton.textContent = 'Скрыть';
        } else {
            moreContent.style.display = 'none';
            readMoreButton.textContent = 'Читать больше';
        }
    });

    // Смена темы
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-theme');
        if (document.body.classList.contains('night-theme')) {
            themeToggle.textContent = 'Сменить на день';
        } else {
            themeToggle.textContent = 'Сменить на ночь';
        }
    });

    // Показать текущее время
    showTimeButton.addEventListener('click', () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeDisplay.textContent = `Текущее время: ${timeString}`;
    });
});

// Обработчик события для кнопки "Показать текущее время"
document.getElementById("timeButton").addEventListener("click", () => {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("timeDisplay").textContent = `Текущее время: ${currentTime}`;
});

// Обработчик события для сброса формы
document.getElementById("resetButton").addEventListener("click", () => {
    document.querySelectorAll('#myForm input').forEach(input => input.value = '');
});

// Обработчик события для отправки формы
document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Форма успешно отправлена!");
});

// Обработчик событий для навигации с помощью клавиатуры
const navItems = document.querySelectorAll("#navMenu li");
navItems.forEach((item, index) => {
    item.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                if (index > 0) navItems[index - 1].focus();
                break;
            case "ArrowDown":
                if (index < navItems.length - 1) navItems[index + 1].focus();
                break;
        }
    });
});

// Обработчик выбора языка
document.getElementById("languageSelector").addEventListener("change", (event) => {
    switch (event.target.value) {
        case "en":
            alert("Language switched to English!");
            break;
        case "ru":
            alert("Язык переключен на русский!");
            break;
        case "kk":
            alert("Тіл қазақшаға ауыстырылды!");
            break;
    }
});

const playStopButton = document.getElementById("playStopButton");
const backgroundMusic = document.getElementById("backgroundMusic");

let isPlaying = false; // Переменная для отслеживания состояния воспроизведения

playStopButton.addEventListener("click", () => {
    if (isPlaying) {
        backgroundMusic.pause(); // Остановить музыку
        playStopButton.textContent = "Играть Музыку"; // Изменить текст кнопки
    } else {
        backgroundMusic.play() // Воспроизвести музыку
            .catch(error => console.error("Ошибка воспроизведения:", error)); // Ловим ошибку, если она есть
        playStopButton.textContent = "Остановить Музыку"; // Изменить текст кнопки
    }
    isPlaying = !isPlaying; // Переключить состояние
});
