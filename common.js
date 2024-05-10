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

    // Wait for images to load before adjusting content margin
    const headerImage = document.querySelector('header img');
    headerImage.onload = adjustContentMargin;
}

// Adjust Content Margin
function adjustContentMargin() {
    const header = document.querySelector('header');
    const content = document.querySelector('.content');
    if (header && content) {
        const headerHeight = header.offsetHeight;
        content.style.marginTop = `${headerHeight}px`;
    }
}

// Initialize functions
window.onload = function() {
    loadHeader();
    loadFooter();
};

// Load Footer
function loadFooter() {
    const footerHTML = `
    <footer>
        <i>"C'est Fini, Monsieur Antechrist" - Albert Camus</i>
        <br>
        <i>Have my eMail. I won't check it cuz it's not 1993.</i>
        <button onclick="copyEmail()" style="background-color: black; color: white;">Copy Here</button>
        <br>
        <i>Yes I made this from scratch. How did you tell?</i>
    </footer>`;
    document.getElementById('footer').innerHTML = footerHTML;
}

// Copy Email Function
function copyEmail() {
    const email = "albert.yan1104@gmail.com";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email);
    }
}

