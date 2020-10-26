const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizesInputs = document.querySelectorAll('.sizes input');

container.addEventListener('mouseover', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) / 25;
    let yAxis = ((window.innerHeight / 2) - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(75px)';
    sizes.style.transform = 'translateZ(75px)';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
});

sizesInputs.forEach(el => {
    el.addEventListener('change', e => {
        document.querySelectorAll('.sizes label').forEach(l => {
            l.classList.remove('active');
        });

        const label = document.querySelector(`label[for='${e.target.id}']`);
        label.classList.add('active');
    });
});