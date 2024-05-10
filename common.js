// Load Header
function loadHeader() {
    const headerHTML = `
    <header>
        <img src="images/website-banner.jpg" alt="Website Banner" style="width: 100%; height: auto; display: block;">
        <nav>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="./page/notes.html">NOTES</a></li>
                <li><a href="./page/graphics.html">GRAPHICS</a></li>
                <li><a href="./page/projects.html">PROJECTS</a></li>
            </ul>
        </nav>
    </header>`;
    document.getElementById('header').innerHTML = headerHTML;
}

// Load Footer
function loadFooter() {
    const footerHTML = `
    <footer>
        <i>"C'est Fini, Monsieur Antechrist" - Albert Camus</i>
        <br>
        <i>Leave me an email (I won't check it cuz it's not 1993).</i>
        <button onclick="copyEmail()">Copy Here</button>
    </footer>`;
    document.getElementById('footer').innerHTML = footerHTML;
}

// Copy Email Function
function copyEmail() {
    const email = "albert.yan1104@gmail.com";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email)}
}

// Initialize functions on window load
window.onload = function() {
    loadHeader();
    loadFooter();
};
