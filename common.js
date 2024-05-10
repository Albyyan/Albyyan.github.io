// Load Header
function loadHeader() {
    const headerHTML = `
    <header>
        <img src="images/website-banner.jpg" alt="Website Banner" style="width: 100%; height: auto; display: block;">
        <nav>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="./page/graphics.html">NOTES</a></li>
                <li><a href="./page/graphics.html">GRAPHICS</a></li>
                <li><a href="./page/graphics.html">PROJECTS</a></li>
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
        navigator.clipboard.writeText(email).then(() => {
            alert('Email address copied to clipboard!');
        }, (err) => {
            console.error('Failed to copy: ', err);
        });
    } else {
        console.error('Clipboard API not available');
    }
}

// Initialize functions on window load
window.onload = function() {
    loadHeader();
    loadFooter();
};
