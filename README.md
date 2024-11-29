# On-Scroll Layout Formations

An exploration of assembling (grid) layouts on scroll.

![Image](https://tympanus.net/codrops/wp-content/uploads/2024/09/onscrolllayoutformationfeat.jpg)

[Article on Codrops](https://tympanus.net/codrops/?p=80656)

[Demo](https://tympanus.net/Development/OnScrollLayoutFormations/)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd on-scroll-layout-formations
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Image Management

This project includes tools for managing and optimizing images:

### Converting Images
1. Place your images in the `img/artworks` directory
2. Run the conversion script:
```bash
npm run convert-images
```
This will convert all images to optimized WebP format in `img/converted`

### Updating Image References
After converting images, update the HTML references:
```bash
npm run update-refs
```

## Features
- GSAP animations with ScrollTrigger
- Smooth scrolling with Lenis
- Image optimization with Sharp
- Multiple grid layout animations
- Responsive design

## Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run convert-images`: Convert images to WebP
- `npm run update-refs`: Update image references in HTML

## Credits

- Images generated with [Midjourney](https://midjourney.com)
- GSAP for animations
- Lenis for smooth scrolling

## License
[MIT](LICENSE)

Made with :blue_heart: by [Codrops](http://www.codrops.com)





