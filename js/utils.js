import imagesLoaded from 'imagesloaded';

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
  console.log('Preloading images with selector:', selector);
  const elements = document.querySelectorAll(selector);
  console.log('Found elements:', elements.length);
  
  return new Promise((resolve) => {
      imagesLoaded(elements, {background: true}, (instance) => {
          console.log('Images loaded:', instance.images.length);
          resolve();
      });
  });
};

// Exporting utility functions for use in other modules.
export {
  preloadImages
};