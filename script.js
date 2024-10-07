window.addEventListener('scroll', function () {
    const cases = document.querySelectorAll('.case-study__wrapper');
    const bottomLimit = window.innerHeight - 10;

    cases.forEach(caseItem => {
        const rect = caseItem.getBoundingClientRect();
        const totalHeight = rect.height;


        if (rect.bottom > bottomLimit) {

            caseItem.classList.add('visible');


            const visibleHeight = bottomLimit - rect.top;

            if (visibleHeight < totalHeight && visibleHeight > 0) {
                caseItem.style.clipPath = `inset(0 0 ${totalHeight - visibleHeight}px 0)`;
            }
        } else if (rect.top < window.innerHeight) {

            caseItem.classList.add('visible');
            caseItem.classList.remove('hidden');
            caseItem.style.clipPath = '';
        }


        if (rect.top < 0) {
            caseItem.classList.add('visible');


            const hiddenHeight = Math.abs(rect.top);

            if (hiddenHeight < totalHeight) {

                caseItem.style.clipPath = `inset(${hiddenHeight}px 0 0 0)`;
            } else {

                caseItem.classList.add('hidden');
                caseItem.classList.remove('visible');
            }
        }
    });
});

window.addEventListener('scroll', () => {

    const blackBlock = document.querySelector('.logo-bg');
    const logo = document.querySelector('.logo');
    blackBlock.style.height = `${logo.offsetHeight}px`;

    let scrollPosition = window.scrollY;

    let scrollPercent = (scrollPosition / window.innerHeight) * 100 > 100 ? 100 : (scrollPosition / this.window.innerHeight) * 100;

    document.querySelector('.logo-bg').style.width = `${scrollPercent}%`;
});

function handleResize() {
    const blackBlock = document.querySelector('.logo-bg');
    const logo = document.querySelector('.logo');
    blackBlock.style.height = `${logo.offsetHeight}px`;
}

window.addEventListener('resize', handleResize);

window.addEventListener('load', handleResize);