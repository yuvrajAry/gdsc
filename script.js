
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.image-container').style.display = 'none';
    }, 2000); 
};


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navbar.classList.remove('bg-blue-500', 'bg-red-500', 'bg-green-400', 'bg-yellow-300');
            if (link.textContent === 'About Us') {
                navbar.classList.add('bg-blue-500');
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            } else if (link.textContent === 'Events') {
                navbar.classList.add('bg-red-500');
                document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
            } else if (link.textContent === 'Blog') {
                navbar.classList.add('bg-green-400');
                const blogSection = document.getElementById('blog');
                if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (link.textContent === 'Contact Us') {
                navbar.classList.add('bg-yellow-300');
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
