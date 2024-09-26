window.addEventListener('scroll', function () {

    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Calculate the percentage of the scroll
    let scrollPercent = (scrollPosition / window.innerHeight) * 100 > 100 ? 100 : (scrollPosition / this.window.innerHeight) * 100;

    // Set the width of the scroll-bar to the scroll percentage
    document.querySelector('.scroll-bar').style.width = `${scrollPercent}%`;
});
