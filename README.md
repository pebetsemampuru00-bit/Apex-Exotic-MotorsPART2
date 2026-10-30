# Apex Exotic Motors - Website Development POE

**Module:** Web Development (Introduction)  
**Module Code:** WEDE5020  
**Assessment:** POE – Part 3

---

## Student Information

| Detail | Information |
|--------|-------------|
| **Name** | Makgatspepe Mampuru |
| **Student Number** | ST10299322 |
| **Module** | Web Development (Introduction) |
| **Module Code** | WEDE5020 |
| **Assessment** | POE Part 3 |
| **Date Submitted** | October 2026 |

---

## Project Overview

Apex Exotic Motors is a luxury vehicle dealership website built for the WEDE5020 Web Development POE. The website showcases premium vehicles including supercars, luxury SUVs, and executive cars from brands such as Ferrari, Lamborghini, Porsche, BMW, Mercedes-Benz, and Audi.

**Business Name:** Apex Exotic Motors  
**Industry:** Automotive – Luxury Vehicle Dealership  
**Target Audience:** High-net-worth individuals, car enthusiasts, business executives  
**Locations:** Sandton (Johannesburg) and Polokwane, South Africa

---

## Website Goals and Objectives

1. **Increase Brand Awareness** – Establish Apex Exotic Motors as a premium luxury vehicle dealership in South Africa.
2. **Generate Leads** – Allow potential customers to enquire about vehicles through a functional enquiry form.
3. **Showcase Inventory** – Display available vehicles with images, descriptions, and specifications.
4. **Provide Contact Information** – Make it easy for customers to visit showrooms or get in touch.
5. **Build Trust** – Share the company story, mission, vision, and values.
6. **Deliver Excellent UX** – Provide a responsive, interactive, and mobile-friendly website.

---

## Key Features and Functionality

| Feature | Description | Page |
|---------|-------------|------|
| **Homepage** | Hero banner, featured brands, benefits, collection, testimonial, FAQ accordion, quick facts | `index.html` |
| **About Page** | Company story, purpose, mission, vision, values, founder, promise | `about.html` |
| **Vehicles Page** | Dynamic vehicle listings, search filter, specification accordions, comparison table | `products.html` |
| **Enquiry Page** | Form with JavaScript validation and AJAX submission showing availability + price response | `enquiry.html` |
| **Contact Page** | Showroom info, business hours, Leaflet interactive map, contact form with email compile | `contact.html` |
| **Lightbox Gallery** | Click any vehicle image to view a larger version | All pages |
| **Search Filter** | Real-time vehicle search on the products page | `products.html` |
| **Interactive Map** | Leaflet map with markers for both showrooms | `contact.html` |
| **Social Media** | Clickable links to Instagram, TikTok, YouTube, LinkedIn, WhatsApp | All pages |
| **Responsive Design** | Adapts to desktop, tablet, and mobile screens | All pages |


## Changelog

### Version 3.0 – Part 3 Submission (October 2026)

---

### Part 2 Feedback Corrections Applied

These changes were made based on the feedback from Part 2.

| # | Issue | Fix Applied | Files Changed | Status |
|---|-------|-------------|---------------|--------|
| 1 | Missing JavaScript functionality | Added `js/script.js` with all required interactivity | `js/script.js` | ✅ Fixed |
| 2 | No dynamic content | Vehicles now load from a JS data array | `products.html`, `js/script.js` | ✅ Fixed |
| 3 | No form validation | Added JavaScript validation with error messages | `enquiry.html`, `contact.html`, `js/script.js` | ✅ Fixed |
| 4 | No AJAX form submission | Forms now submit using `fetch()` | `js/script.js` | ✅ Fixed |
| 5 | No interactive map | Replaced iframe with Leaflet interactive map | `contact.html`, `js/script.js` | ✅ Fixed |
| 6 | No SEO meta tags | Added `description`, `keywords`, `author` meta tags | All HTML pages | ✅ Fixed |
| 7 | No robots.txt | Created `robots.txt` | Root folder | ✅ Fixed |
| 8 | No sitemap.xml | Created `sitemap.xml` | Root folder | ✅ Fixed |
| 9 | Logo link inconsistent in contact.html | Fixed logo to match other pages | `contact.html` | ✅ Fixed |

---

### New Part 3 Features Added

| # | Feature | Description | Files Changed | Status |
|---|---------|-------------|---------------|--------|
| 10 | Accordion | FAQ on homepage + vehicle specs on products page | `index.html`, `products.html`, `css/style.css`, `js/script.js` | ✅ Added |
| 11 | Lightbox Gallery | Click vehicle images for larger view | All pages, `css/style.css`, `js/script.js` | ✅ Added |
| 12 | Search Filter | Real-time vehicle search on products page | `products.html`, `js/script.js` | ✅ Added |
| 13 | Dynamic Content Loading | Vehicle cards built from JavaScript data array | `products.html`, `js/script.js` | ✅ Added |
| 14 | Enquiry Validation | Full JS validation with error messages | `enquiry.html`, `js/script.js` | ✅ Added |
| 15 | Enquiry AJAX | Asynchronous form submission with `fetch()` | `js/script.js` | ✅ Added |
| 16 | Enquiry Response | Shows availability and estimated price after submission | `js/script.js` | ✅ Added |
| 17 | Contact Validation | Full JS validation with error messages | `contact.html`, `js/script.js` | ✅ Added |
| 18 | Contact AJAX + Email | Compiles a `mailto:` link for the user to send | `contact.html`, `js/script.js` | ✅ Added |
| 19 | Leaflet Map | Interactive map with markers for both showrooms | `contact.html`, `js/script.js` | ✅ Added |
| 20 | SEO Meta Tags | `description`, `keywords`, `author`, `robots` on all pages | All HTML pages | ✅ Added |
| 21 | robots.txt | Instructs search engines to index all pages | Root folder | ✅ Added |
| 22 | sitemap.xml | Lists all pages for search engines | Root folder | ✅ Added |

---

### Detailed Part 3 Change Descriptions

**10. Accordion Added (October 2026)**
- **Where:** `index.html` (FAQ section) and `products.html` (Vehicle Details section)
- **How:** CSS transitions with `.accordion` and `.panel` classes, JS toggles `maxHeight`
- **Result:** Users can expand/collapse questions and specifications

**11. Lightbox Gallery Added (October 2026)**
- **Where:** All pages with `.gallery-item` images
- **How:** JS creates a full-screen overlay when an image is clicked
- **Result:** Users can view images at full size and close with X or click outside

**12. Search Filter Added (October 2026)**
- **Where:** `products.html`
- **How:** `keyup` listener on `#searchInput` filters `.vehicle-card` elements
- **Result:** Real-time vehicle search by name

**13. Dynamic Content Loading Added (October 2026)**
- **Where:** `products.html`
- **How:** Vehicles defined in a JavaScript array; JS builds the `<li>` cards on page load
- **Result:** Content is loaded dynamically, not hard-coded in HTML

**14-16. Enquiry Form (Validation + AJAX + Response) (October 2026)**
- **Where:** `enquiry.html`
- **How:** JS validates name, email, phone, vehicle, budget, and branch; then submits via `fetch()`; on success, shows availability and estimated price
- **Result:** Users get instant feedback and a personalised response

**17-18. Contact Form (Validation + AJAX + Email) (October 2026)**
- **Where:** `contact.html`
- **How:** JS validates name, email, phone, message type, and message; submits via `fetch()`; then compiles a `mailto:` link
- **Result:** Users can send an email with one click after validation

**19. Leaflet Interactive Map Added (October 2026)**
- **Where:** `contact.html`
- **How:** Leaflet library with OpenStreetMap tiles, two markers with popups
- **Result:** Users can zoom, pan, and click markers to see showroom info

**20. SEO Meta Tags Added (October 2026)**
- **Where:** All 5 HTML pages
- **How:** Added `description`, `keywords`, `author`, `robots` to `<head>`
- **Result:** Better search engine visibility

**21-22. robots.txt and sitemap.xml Added (October 2026)**
- **Where:** Project root
- **How:** Standard SEO files listing allowed pages and sitemap location
- **Result:** Search engines can crawl and index the site correctly

---

### Part 1 Corrections (Carried Forward from Part 2)

| # | Issue | Fix Applied | Status |
|---|-------|-------------|--------|
| 1 | Internal links opened in new tabs | Removed `target="_blank"` from internal links | ✅ Fixed |
| 2 | Image had space in filename | Kept as `range rover.jpg` per user preference, referenced correctly in all code | ✅ Working |
| 3 | Comments too brief | Added detailed comments | ✅ Fixed |
| 4 | HTML5 semantic elements missing | Added `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` | ✅ Fixed |
| 5 | Logo not clickable | Wrapped `<h1>` in `<a href="index.html">` | ✅ Fixed |
| 6 | No changelog | Created this comprehensive changelog | ✅ Fixed |

---

## SEO Implementation

| SEO Element | Where It Is Used | Example |
|-------------|------------------|---------|
| **Title Tags** | Every page `<title>` | "Apex Exotic Motors \| Luxury Vehicle Dealership South Africa" |
| **Meta Description** | Every page `<meta name="description">` | "Apex Exotic Motors is South Africa's premier luxury vehicle dealership..." |
| **Meta Keywords** | Every page `<meta name="keywords">` | "luxury cars, supercars, Ferrari, Lamborghini..." |
| **Image Alt Text** | All `<img>` tags | `alt="Red Ferrari 296 GTB supercar"` |
| **Header Tags** | All pages | `<h1>`, `<h2>`, `<h3>` used in order |
| **Clean URLs** | All pages | `index.html`, `about.html`, `products.html`, etc. |
| **Internal Linking** | Navigation + footer | Links on every page to all other pages |
| **Mobile-Friendly** | `style.css` media queries | Responsive at 768px and 480px |
| **robots.txt** | Root folder | Allows all crawlers |
| **sitemap.xml** | Root folder | Lists all pages with priorities |

---

## JavaScript Functionality Summary

| Function | File | Page | What It Does |
|----------|------|------|-------------|
| Accordion | `js/script.js` | `index.html`, `products.html` | Expands/collapses FAQ and vehicle specs |
| Lightbox | `js/script.js` | All pages | Opens images in full-screen overlay |
| Dynamic Content | `js/script.js` | `products.html` | Builds vehicle cards from JS array |
| Search Filter | `js/script.js` | `products.html` | Filters cards as user types |
| Enquiry Validation | `js/script.js` | `enquiry.html` | Checks name, email, phone, vehicle, budget, branch |
| Enquiry AJAX | `js/script.js` | `enquiry.html` | Submits form with `fetch()` |
| Enquiry Response | `js/script.js` | `enquiry.html` | Shows availability + price |
| Contact Validation | `js/script.js` | `contact.html` | Checks name, email, phone, type, message |
| Contact AJAX | `js/script.js` | `contact.html` | Submits form with `fetch()` |
| Contact Email | `js/script.js` | `contact.html` | Builds `mailto:` link |
| Leaflet Map | `js/script.js` | `contact.html` | Interactive map with 2 markers |

---

## Deployment

**Live Website:**https://apexexoticmotors.netlify.app


## References

### HTML References

1. W3Schools. (2026). *HTML Tutorial*. Available at: https://www.w3schools.com/html/ [Accessed 20 October 2026].

2. W3Schools. (2026). *HTML5 Semantic Elements*. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 20 October 2026].

3. Mozilla Developer Network. (2026). *HTML Elements Reference*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element [Accessed 20 October 2026].

### CSS References

4. W3Schools. (2026). *CSS Tutorial*. Available at: https://www.w3schools.com/css/ [Accessed 20 October 2026].

5. W3Schools. (2026). *CSS Flexbox*. Available at: https://www.w3schools.com/css/css3_flexbox.asp [Accessed 20 October 2026].

6. W3Schools. (2026). *CSS Media Queries*. Available at: https://www.w3schools.com/css/css3_mediaqueries.asp [Accessed 20 October 2026].

7. Mozilla Developer Network. (2026). *CSS Pseudo-classes*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes [Accessed 20 October 2026].

8. W3Schools. (2026). *CSS Box Shadow*. Available at: https://www.w3schools.com/css/css3_shadows_box.asp [Accessed 20 October 2026].

9. W3Schools. (2026). *CSS Transitions*. Available at: https://www.w3schools.com/css/css3_transitions.asp [Accessed 20 October 2026].

### JavaScript References

10. Mozilla Developer Network. (2026). *JavaScript Guide*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide [Accessed 20 October 2026].

11. W3Schools. (2026). *JavaScript Tutorial*. Available at: https://www.w3schools.com/js/ [Accessed 20 October 2026].

12. Mozilla Developer Network. (2026). *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API [Accessed 20 October 2026].

13. Mozilla Developer Network. (2026). *FormData*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/FormData [Accessed 20 October 2026].

14. Mozilla Developer Network. (2026). *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch [Accessed 20 October 2026].

### Leaflet Map References

15. Leaflet. (2026). *Leaflet Quick Start Guide*. Available at: https://leafletjs.com/examples/quick-start/ [Accessed 20 October 2026].

16. OpenStreetMap. (2026). *OpenStreetMap Contributors*. Available at: https://www.openstreetmap.org/copyright [Accessed 20 October 2026].

### SEO References

17. Google Search Central. (2026). *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 20 October 2026].

18. Mozilla Developer Network. (2026). *Meta Elements*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta [Accessed 20 October 2026].

19. Sitemaps.org. (2026). *Sitemap XML Protocol*. Available at: https://www.sitemaps.org/protocol.html [Accessed 20 October 2026].

### Image Sources

20. Ferrari Media Centre. (2026). *Ferrari 296 GTB Images*. Available at: https://media.ferrari.com [Accessed 20 October 2026].

21. Lamborghini Press Kit. (2026). *Lamborghini Huracán EVO Images*. Available at: https://www.lamborghini.com [Accessed 20 October 2026].

22. Mercedes-Benz Media. (2026). *Mercedes-Benz G63 AMG Images*. Available at: https://media.mercedes-benz.com [Accessed 20 October 2026].

23. BMW Media Centre. (2026). *BMW M5 Competition Images*. Available at: https://www.bmw.com [Accessed 20 October 2026].

24. Audi Media Centre. (2026). *Audi RS7 Images*. Available at: https://www.audi.com [Accessed 20 October 2026].

25. Range Rover Media. (2026). *Range Rover Sport Images*. Available at: https://www.landrover.com [Accessed 20 October 2026].

---

## Conclusion

This website meets all Part 3 requirements including:

- ✅ Part 2 feedback addressed
- ✅ Accordion functionality
- ✅ Interactive Leaflet map
- ✅ Gallery lightbox
- ✅ Dynamic content loading
- ✅ Search and filter functionality
- ✅ Enquiry form with validation and AJAX
- ✅ Enquiry form with availability + price response
- ✅ Contact form with validation, AJAX and email compile
- ✅ SEO title tags, meta descriptions, meta keywords
- ✅ Image alt text and clean filenames
- ✅ robots.txt and sitemap.xml
- ✅ Multiple descriptive commits to GitHub
- ✅ Comprehensive changelog
- ✅ Correctly formatted references
- ✅ Website deployed online
