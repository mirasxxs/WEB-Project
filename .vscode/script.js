document.addEventListener("DOMContentLoaded", () => {
    const popupForm = document.getElementById("popupForm");
    const contactButton = document.getElementById("contactButton");
    const closePopup = document.getElementById("closePopup");

    contactButton.addEventListener("click", () => {
        popupForm.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
        popupForm.style.display = "none";
    });

    document.getElementById("colorButton").addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setInterval(() => {
        const dateTimeElement = document.getElementById("dateTime");
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }, 1000);
});

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
        errorMessage.textContent = "";
        alert("Form submitted successfully!");
        return true;
    }
}

// Рейтинг (звездочки)
const stars = document.querySelectorAll(".star");
const ratingMessage = document.getElementById("ratingMessage");

stars.forEach(star => {
    star.addEventListener("click", function () {
        stars.forEach(s => s.classList.remove("selected"));
        this.classList.add("selected");
        const rating = this.getAttribute("data-value");
        ratingMessage.textContent = `Ваш рейтинг: ${rating} звезды.`;
    });
});

// Изменение сообщения
const changeMessageButton = document.getElementById("changeMessageButton");
changeMessageButton.addEventListener("click", () => {
    ratingMessage.textContent = "Вы нажали на кнопку и изменили сообщение!";
});

// Кнопка "Read More"
const readMoreButton = document.getElementById("readMoreButton");
const moreContent = document.getElementById("moreContent");

readMoreButton.addEventListener("click", () => {
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});

// Переключение темы (день/ночь)
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
        ? "Сменить на дневную тему" 
        : "Сменить на ночную тему";
});
// Показать текущее время
const showTimeButton = document.getElementById("showTimeButton");
const timeDisplay = document.getElementById("timeDisplay");

showTimeButton.addEventListener("click", () => {
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.textContent = `Текущее время: ${currentTime}`;
});

// Сбросить форму
const resetButton = document.getElementById("resetButton");
const sampleForm = document.getElementById("sampleForm");

resetButton.addEventListener("click", () => {
    sampleForm.querySelectorAll('input').forEach(input => input.value = '');
});

function changeLanguage(language) {
    const greeting = document.getElementById("greeting");
    const description = document.getElementById("description");

    switch (language) {
        case "en":
            greeting.textContent = "Welcome";
            description.textContent = "This is a simple multi-language site.";
            break;
        case "ru":
            greeting.textContent = "Добро пожаловать";
            description.textContent = "Это простой многоязычный сайт.";
            break;
        case "kz":
            greeting.textContent = "Қош келдіңіз";
            description.textContent = "Бұл қарапайым көптілді сайт.";
            break;
        default:
            greeting.textContent = "Welcome";
            description.textContent = "This is a simple multi-language site.";
    }
}
