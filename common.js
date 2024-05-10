// Load Header
function loadHeader() {
    const headerHTML = `
    <header>
        <img src="images/website-banner.jpg" alt="Website Banner" style="width: 100%; height: auto; display: block;">
        <nav>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="./page/graphics.html">BLOG</a></li>
                <li><a href="./page/graphics.html">GRAPHICS</a></li>
                <li><a href="./page/graphics.html">NOTES</a></li>
            </ul>
        </nav>
    </header>`;
    document.getElementById('header').innerHTML = headerHTML;
}

// Load Footer
function loadFooter() {
    const footerHTML = `
    <footer>
        <p>C'est Fini, Monsieur Antechrist!</p>
        <p>Contact us at <a href="mailto:albert.yan1104@gmail.com">albert.yan1104@gmail.com</a>.</p>
    </footer>`;
    document.getElementById('footer').innerHTML = footerHTML;
}

// Call the functions on window load
window.onload = function() {
    loadHeader();
    loadFooter();
};
