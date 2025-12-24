# ZTR Masala - Premium Spices E-Commerce

An elegant, responsive e-commerce website for authentic Tamil Nadu spices with a modern design and smooth user experience.

## Features

- ✨ **Modern Hero Section** - Attractive gradient overlay with engaging call-to-action
- 🛍️ **Product Catalog** - Browse products with category filters (Whole, Powder, Blends)
- 🛒 **Shopping Cart** - Add/remove items, view total, and checkout
- 📱 **Fully Responsive** - Optimized for mobile (480px), tablet (768px), and desktop (1024px+)
- 📧 **Contact Form** - Direct messaging with toast notifications
- ✅ **Smooth Animations** - Hover effects, transitions, and sliding notifications
- 🌍 **Social Links** - Facebook, Instagram, WhatsApp connections
- 🔍 **Product Search** - Filter by spice type and category
- 💳 **Cart Management** - Persistent cart with item count badge

## Tech Stack

- HTML5
- CSS3 (with responsive media queries)
- Vanilla JavaScript (no dependencies)
- Font Awesome Icons
- Google Fonts (Playfair Display, Poppins)

## Project Structure

```
ZTR_Masala/
├── index.html          # Main HTML file
├── style.css           # All styling and responsive design
├── script.js           # JavaScript functionality
├── components/
│   └── images/         # Product and background images
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Sections

1. **Navigation Bar** - Fixed navbar with mobile hamburger menu
2. **Hero Section** - Full-screen image with left-aligned text and CTA
3. **Our Story** - Brand narrative with farm-to-flame messaging
4. **Best Sellers** - Product grid with filters and add-to-cart
5. **Why Choose Us** - 4 key value propositions
6. **Contact** - Contact info and message form with social links
7. **Footer** - Copyright info

## Key Responsive Features

- Mobile-first design approach
- Touch-friendly navigation and buttons
- Optimized images and layout for all screen sizes
- Hamburger menu for mobile devices
- Flexible grid layouts
- Adjusted typography for readability

### Breakpoints
- **Mobile**: 480px and below
- **Tablet**: 481px - 768px
- **Desktop**: 769px and above

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through the site and test all features

## Deployment

### GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ZTR_Masala.git
git push -u origin main
```

### Netlify
1. Go to [Netlify](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Select your ZTR_Masala repository
5. Set build settings (no build command needed for static site)
6. Deploy!

Or drag and drop the folder directly to Netlify.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Details

### Product Management
- 8 products with pricing and categories
- Easy to add more products in `script.js`
- Product images stored in `components/images/`

### Cart System
- Add/remove items
- Update quantities
- Real-time total calculation
- Cart count badge

### Mobile Menu
- Hidden on desktop
- Click hamburger icon to toggle
- Responsive navigation

### Forms
- Contact form with validation
- Toast notifications for feedback
- Email integration ready

## Customization

### Colors
Edit `:root` variables in `style.css`:
```css
--primary: #c2410c;      /* Orange */
--primary-dark: #9a3412; /* Dark Orange */
--text-dark: #1f2937;    /* Dark text */
--bg-light: #fef9f3;     /* Light background */
```

### Products
Edit the `products` array in `script.js` to add/modify products.

### Contact Info
Update contact details in the Contact section of `index.html`.

## Performance Optimizations

- No external dependencies (faster loading)
- Efficient CSS selectors
- Optimized media queries
- Lazy-loading ready for images
- Minimal JavaScript for max performance

## Future Enhancements

- Add payment gateway integration
- Product detail pages
- User authentication
- Order history
- Email notifications
- Analytics integration
- PWA support

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, create an issue in the GitHub repository.

---

**Made with ❤️ for authentic spice lovers**
