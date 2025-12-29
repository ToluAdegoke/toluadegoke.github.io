// This function checks the <body> tag
// If it has the class "light-mode", it removes it.
// If it doesn't have it, it adds it.
function toggleTheme() {
    var element = document.body;
    element.classList.toggle("light-mode");
    
    console.log("Theme switched!");
}

console.log("Tolu's Portfolio Loaded Successfully.");