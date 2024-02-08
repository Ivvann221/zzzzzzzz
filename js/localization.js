// localization.js

// Функція для встановлення мови
function setLanguage(language) {
    // Завантаження файлу локалізації
    fetch(language + '.json')
        .then(response => response.json())
        .then(data => {
            // Заміна текстів на сторінці
            Object.keys(data).forEach(key => {
                const element = document.querySelector(`[data-translate="${key}"]`);
                if (element) {
                    element.textContent = data[key];
                }
            });
        })
        .catch(error => console.error('Localization error:', error));
}

// Визначення мови за замовчуванням
let defaultLanguage = 'en';

// Отримання значення параметра ?lang з URL
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');

// Встановлення мови з параметра ?lang або за замовчуванням
if (langParam) {
    setLanguage(langParam);
} else {
    setLanguage(defaultLanguage);
}