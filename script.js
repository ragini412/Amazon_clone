// carousel js

const carousel = document.querySelector(".carousel");
const arrowbtns = document.querySelectorAll(".carousel i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isdragging = false, startX , startScrollLeft;

arrowbtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.id);
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;    
    })
});

const dragStart = (e) => {
    isdragging = true;
    carousel.classList.add("dragging");
    startX= e.pageX;
    startScrollLeft=carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isdragging) return; // If isdragging is false return from here!
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    // carousel.scrollLeft = e.pageX;
}

const dragStop = (e) => {
    isdragging = true;
    carousel.classList.remove("dragging");
}

// carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseover", dragStart);
carousel.addEventListener("mousemove", dragging); 
document.addEventListener("mouseup",dragStop);

//For touch
carousel.addEventListener("ontouchstart", dragStart);
carousel.addEventListener("ontouchmove", dragging); 
document.addEventListener("ontouchend",dragStop);

