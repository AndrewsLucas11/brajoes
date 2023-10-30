const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
});
navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        header.classList.remove('active');
        nav.classList.remove('active');
    });
});

window.addEventListener('resize', function(){
    if (this.window.innerHeight > 767){
    header.classList.remove('active');
    nav.classList.remove('active');
    }
})

/*Redes sociais */
document.getElementById("area1").addEventListener("click", function() {
    showImage("areaImg1");
});
document.getElementById("area2").addEventListener("click", function() {
    showImage("areaImg2");
});
document.getElementById("area3").addEventListener("click", function() {
    showImage("areaImg3");
});
document.getElementById("area4").addEventListener("click", function() {
    showImage("areaImg4");
});
function showImage(imageId) {
    const imageContainers = document.getElementsByClassName("containerImage");
    for (const container of imageContainers) {
        container.style.display = "none";
    }
    const selectedImage = document.getElementById(imageId);
    selectedImage.style.display = "block";
}
const ajusteContainer = document.querySelector('.containerGlobal');
const inputSocial = document.querySelectorAll('.inputSocial');

inputSocial.forEach(area => {
    area.addEventListener('click', () => {
        ajusteContainer.style.width = '900px'
    })
});