import { preloadImages } from './utils.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

// Connect GSAP ScrollTrigger and Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const grid1 = document.querySelector('.grid--1');
const grid2 = document.querySelector('.grid--2');
const grid3 = document.querySelector('.grid--3');

const grids = [grid1, grid2, grid3];

const animateGrid = (grid, delay = 0) => {
    const gridItems = grid.querySelectorAll('.grid__item-img');
    
    return gsap.timeline({
        scrollTrigger: {
            trigger: grid,
            start: 'top bottom-=10%',
            end: 'bottom top+=10%',
            scrub: true
        }
    })
    .set(gridItems, {
        opacity: 0,
        scale: 0.8
    })
    .to(gridItems, {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out'
    });
};

// Preload images
preloadImages('.grid__item-img').then(() => {
    document.body.classList.remove('loading');
    
    // Animate each grid
    grids.forEach((grid, index) => {
        animateGrid(grid, index * 0.2);
    });
});

// Handle hover effects
grids.forEach(grid => {
    const items = grid.querySelectorAll('.grid__item-img');
    
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}); 