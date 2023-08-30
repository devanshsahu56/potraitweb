function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();




const text = document.querySelector('#circle2 p');
text.innerHTML = text.innerText.split("").map(
  (char , i )=>`<span style="transform:rotate(${i*3.4}deg)">${char}</span> `
).join("");


const text2 = document.querySelector('#circle3 p');
text2.innerHTML = text2.innerText.split("").map(
  (char , i )=>`<span style="transform:rotate(${i*3.4}deg)">${char}</span> `
).join("")

const text3 = document.querySelector('#c2 p');
text3.innerHTML = text3.innerText.split("").map(
  (char , i )=>`<span style="transform:rotate(${i*7.2}deg)">${char}</span> `
).join("")

const text4 = document.querySelector('#crbtn p');
text4.innerHTML = text4.innerText.split("").map(
  (char , i )=>`<span style="transform:rotate(${i*9}deg)">${char}</span> `
).join("")

const text5 = document.querySelector('#crbt p');
text5.innerHTML = text5.innerText.split("").map(
  (char , i )=>`<span style="transform:rotate(${i*9}deg)">${char}</span> `
).join("")

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});