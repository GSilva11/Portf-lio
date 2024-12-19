const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.esconder',{
	duration: 2000,
	distance: '90px',
})