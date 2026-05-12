document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const navLinks = document.querySelectorAll("nav a");

    setTimeout(() => {
        mainContent.classList.add("page-enter");
    }, 50);

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

        link.addEventListener("click", function(e) {
            const target = this.getAttribute('href');
            
            if (target === currentPath) return;

            e.preventDefault();

            mainContent.classList.remove("page-enter");
            mainContent.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = target;
            }, 400); 
        });
    });
});
