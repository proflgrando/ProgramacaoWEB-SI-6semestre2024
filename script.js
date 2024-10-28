// Toggle dark mode theme
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeButton.textContent = 
        document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// Accessibility: Increase font size for better readability
const accessibilityButton = document.getElementById('accessibility-btn');
let fontSizeIncreased = false;

accessibilityButton.addEventListener('click', () => {
    document.body.style.fontSize = fontSizeIncreased ? '1em' : '1.1em';
    accessibilityButton.textContent = fontSizeIncreased ? 'Acessibilidade' : 'Tamanho de Fonte +';
    fontSizeIncreased = !fontSizeIncreased;
});