
function hideMenuItems() {

const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const projectsLink = document.getElementById('projects-link');
    const contactLink = document.getElementById('contact-link');

const windowWidth = window.innerWidth;

const breakpointWidth = 600;

if (windowWidth < breakpointWidth) {
    aboutLink.style.display = 'none';
    projectsLink.style.display = 'none';
    contactLink.style.display = 'none';
    homeLink.style.display = 'none';

} else {
    projectsLink.style.display = 'inline-block';
    contactLink.style.display = 'inline-block';
    aboutLink.style.display = 'inline-block';
    homeLink.style.display = 'inline-block';

}
}
hideMenuItems();


window.addEventListener('resize', hideMenuItems);