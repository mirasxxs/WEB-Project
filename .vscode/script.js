
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


document.addEventListener("DOMContentLoaded", () => {
    console.log("Navbar script loaded!");
});

// Получаем элементы
const themeSwitcher = document.getElementById("themeSwitcher");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

// Функция для переключения темы
function toggleTheme() {
    // Переключаем класс 'dark-mode'
    document.body.classList.toggle("dark-mode");

    // Обновляем текст и иконку
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.textContent = "🌙";
        themeText.textContent = "Switch to Light Mode";
    } else {
        themeIcon.textContent = "🌞";
        themeText.textContent = "Switch to Dark Mode";
    }

    // Сохраняем текущую тему в localStorage
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

// Устанавливаем тему при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.textContent = "🌙";
        themeText.textContent = "Switch to Light Mode";
    }
});

// Слушаем нажатие на кнопку
themeSwitcher.addEventListener("click", toggleTheme);
