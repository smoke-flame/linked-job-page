const openDesciptionBtn = document.querySelector('.job-description__button');
const closeDesciptionBtn = document.querySelector('.desciption__header__img');

const desciption = document.querySelector('.desciption');
const body = document.body;

openDesciptionBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    desciption.classList.add('active');
    body.classList.add('desc');

});

closeDesciptionBtn.addEventListener('click', () => {
    desciption.classList.add('remove');

    setTimeout(() => {
        desciption.classList.remove('active');
    }, 200)
    body.classList.remove('desc');

    setTimeout(() => {
        desciption.classList.remove('remove');
    }, 500)
});

const topInfo = document.querySelector('.header__about');
const header = document.querySelector('.header');

window.addEventListener('scroll', event => {
    let scrollHihtt = window.pageYOffset;
    if (scrollHihtt > 20) {
        topInfo.classList.add('active');
        header.classList.add('active');
    }
    if (scrollHihtt === 0) {
        topInfo.classList.remove('active');
        header.classList.remove('active');
    }
    // console.log(window.pageYOffset);
})