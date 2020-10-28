const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const circle = document.querySelector('.circle');
const sizesInputs = document.querySelectorAll('.sizes input');

container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) / 25;
    let yAxis = ((window.innerHeight / 2) - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(75px)';
    sizes.style.transform = 'translateZ(75px)';
    circle.style.transform = `rotate(180deg)`;

    card.style.transition = 'none';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';

    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    circle.style.transform = `rotate(0deg)`;

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