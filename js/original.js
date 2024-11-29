import { preloadImages } from './utils.js';
import Lenis from '@studio-freight/lenis';

console.log('original.js loaded');

// GSAP is loaded globally
const { gsap } = window;
const { ScrollTrigger } = window;

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

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

    // Get all grid elements
    const grids = document.querySelectorAll('[data-grid-first], [data-grid-second], [data-grid-third], [data-grid-fourth], [data-grid-fourth-v2], [data-grid-fifth], [data-grid-sixth], [data-grid-seventh], [data-grid-eighth], [data-grid-ninth]');

    console.log('Found grids:', grids.length);

    const animateGrid = (grid, delay = 0) => {
        const gridImages = grid.querySelectorAll('.grid__img');
        const gridInnerImages = grid.querySelectorAll('.grid__img-inner');
        const elements = [...gridImages, ...gridInnerImages];
        
        console.log('Found images in grid:', elements.length);
        
        return gsap.timeline({
            scrollTrigger: {
                trigger: grid,
                start: 'top bottom-=10%',
                end: 'bottom top+=10%',
                scrub: true
            }
        })
        .set(elements, {
            opacity: 0,
            scale: 0.8
        })
        .to(elements, {
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'power4.out'
        });
    };

    // Preload images
    preloadImages('.grid__img, .grid__img-inner').then(() => {
        document.body.classList.remove('loading');
        
        // Animate each grid
        grids.forEach((grid, index) => {
            animateGrid(grid, index * 0.2);
        });
    });

    // Handle hover effects
    grids.forEach(grid => {
        const images = grid.querySelectorAll('.grid__img');
        const innerImages = grid.querySelectorAll('.grid__img-inner');
        const elements = [...images, ...innerImages];
        
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(element, {
                    scale: 1.1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            
            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    });
}); 