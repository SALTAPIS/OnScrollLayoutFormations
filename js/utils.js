import imagesLoaded from 'imagesloaded';

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
      imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  });
};

// Exporting utility functions for use in other modules.
export {
  preloadImages
};