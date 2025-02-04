// Toggle between Light, Dark, and Auto mode
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButtons = document.querySelectorAll("[data-bs-theme-value]");
    const htmlElement = document.documentElement;

    // set theme to system preference
    function setTheme(theme) {
        if (theme == "auto")
            theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        htmlElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // toggle between themes
    themeToggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("data-bs-theme-value");
            setTheme(theme);
        });
    });
});

