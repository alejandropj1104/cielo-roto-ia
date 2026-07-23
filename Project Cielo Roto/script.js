// MENU MOBILE

const toggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu")

toggle.onclick = () =>{
menu.style.display = menu.style.display === "flex" ? "none":"flex"
}

document.querySelectorAll(".menu a").forEach(link => {
link.addEventListener("click", (e) => {
const href = link.getAttribute("href")
if(href.startsWith("#")){
e.preventDefault()
const target = document.querySelector(href)
if(target){
gsap.to(window, {duration: 0.5, scrollTo: target, ease: "power2.inOut"})
}
}
if(window.innerWidth <= 900){
menu.style.display = "none"
}
})
})


// LIGHTBOX GALLERY

const images = document.querySelectorAll(".grid img")
const lightbox = document.querySelector(".lightbox")
const lightboxImg = document.querySelector(".lightbox-img")
const closeBtn = document.querySelector(".close")

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

closeBtn.addEventListener("click", () => {

lightbox.style.display = "none"

})


// CERRAR SI HACES CLICK FUERA DE LA IMAGEN

lightbox.addEventListener("click",(e)=>{

if(e.target !== lightboxImg){

lightbox.style.display="none"

}

})


// ANIMACIÓN HERO (GSAP)

gsap.from(".hero h1",{
y:80,
opacity:0,
duration:1.5
})

gsap.from(".hero p",{
y:40,
opacity:0,
delay:0.5,
duration:1.5
})

gsap.from(".btn",{
delay:1,
duration:1.5
})

const header = document.querySelector(".header")

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
header.classList.add("scrolled")
}else{
header.classList.remove("scrolled")
}

})