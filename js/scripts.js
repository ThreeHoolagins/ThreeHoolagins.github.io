// Copy-to-clipboard buttons: <button data-copy="text">Label <span class="hint">copy</span></button>
document.querySelectorAll("[data-copy]").forEach((button) => {
    const hint = button.querySelector(".hint");

    button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(button.dataset.copy);
        if (!hint) return;
        hint.textContent = "copied ✓";
        setTimeout(() => (hint.textContent = "copy"), 1500);
    });
});

// Footer theme toggle: flips <html data-theme> and remembers the choice
document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const root = document.documentElement;
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        try {
            localStorage.setItem("theme", root.dataset.theme);
        } catch (e) {}
    });
});
