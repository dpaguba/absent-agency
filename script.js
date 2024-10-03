// window.addEventListener('scroll', function () {

//     // Get the current scroll position
//     // let scrollPosition = window.scrollY;

//     // console.log(scrollPosition);


//     // Calculate the percentage of the scroll
//     let scrollPercent = (scrollPosition / window.innerHeight) * 100 > 100 ? 100 : (scrollPosition / this.window.innerHeight) * 100;

//     // Set the width of the scroll-bar to the scroll percentage
//     document.querySelector('.logo-bg').style.width = `${scrollPercent}%`;
// });

window.addEventListener('scroll', function () {
    const cases = document.querySelectorAll('.case-study__wrapper');
    const bottomLimit = window.innerHeight - 10; // 20px от нижней части экрана

    cases.forEach(caseItem => {
        const rect = caseItem.getBoundingClientRect();
        const totalHeight = rect.height;

        // Проверяем, пересекает ли элемент 20px от низа экрана
        if (rect.bottom > bottomLimit) {
            // Если элемент пересекает отметку в 20px от низа
            caseItem.classList.add('visible');

            // Рассчитываем, какую часть нужно обрезать
            const visibleHeight = bottomLimit - rect.top;

            if (visibleHeight < totalHeight && visibleHeight > 0) {
                caseItem.style.clipPath = `inset(0 0 ${totalHeight - visibleHeight}px 0)`;
            }
        } else if (rect.top < window.innerHeight) {
            // Когда верхняя часть элемента находится в видимой области
            caseItem.classList.add('visible');
            caseItem.classList.remove('hidden');
            caseItem.style.clipPath = '';
        }

        // Если элемент частично или полностью выходит за верхний край экрана
        if (rect.top < 0) {
            caseItem.classList.add('visible');

            // Рассчитываем, сколько элемента уже "вышло" за верхний край
            const hiddenHeight = Math.abs(rect.top);

            if (hiddenHeight < totalHeight) {
                // Постепенно обрезаем верх элемента
                caseItem.style.clipPath = `inset(${hiddenHeight}px 0 0 0)`;
            } else {
                // Полностью скрываем элемент, если он полностью вышел за пределы
                caseItem.classList.add('hidden');
                caseItem.classList.remove('visible');
            }
        }
    });
});



// function adjustScrollContainerHeight() {
//     const logo = document.querySelector('.logo');
//     const scrollContainer = document.querySelector('.logo-container');

//     scrollContainer.style.height = logo.offsetHeight + 'px';
// }

// window.addEventListener('load', adjustScrollContainerHeight);
// window.addEventListener('resize', adjustScrollContainerHeight);

// function resetScrollPosition() {
//     window.scrollTo(0, 0);
// }
// window.onload = resetScrollPosition;




window.addEventListener('scroll', () => {

    const blackBlock = document.querySelector('.logo-bg');
    const logo = document.querySelector('.logo');
    blackBlock.style.height = `${logo.offsetHeight}px`;

    let scrollPosition = window.scrollY;

    let scrollPercent = (scrollPosition / window.innerHeight) * 100 > 100 ? 100 : (scrollPosition / this.window.innerHeight) * 100;




    document.querySelector('.logo-bg').style.width = `${scrollPercent}%`;



    // let maxWidth = logo.offsetWidth - (logo.offsetWidth * 0.089);
    // blackBlock.style.right = logo.offsetWidth * 0.089 + 'px';

    // let scrollPercent = (scrollPosition / window.innerHeight) > maxWidth ? maxWidth : (scrollPosition / this.window.innerHeight) * 100;
    // document.querySelector('.logo-bg').style.width = `${scrollPercent}%`;


    // blackBlock.style.width = '90%';


    // if (window.innerWidth < 820) {
    //     blackBlock.style.right = logo.offsetWidth * 0.09 + 'px';
    // }



    // const scrollPosition = window.scrollY;
    // const viewportHeight = window.innerHeight;

    // if (scrollPosition >= viewportHeight) {
    //     blackBlock.style.width = '90%';
    // } else {
    //     const progress = (scrollPosition / viewportHeight) * 100;
    //     blackBlock.style.width = `${progress}%`;
    // }
});