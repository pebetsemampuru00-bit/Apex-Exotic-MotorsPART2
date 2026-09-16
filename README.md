# Apex Exotic Motors - Website Development POE

---

## Student Information

| Detail | Information |
|--------|-------------|
| **Name** | Makgatspepe Mampuru |
| **Student Number** | ST10299322 |
| **Module** | Web Development (Introduction) |
| **Module Code** | WEDE5020 |
| **Assessment** | POE Part 2 |
| **Date** | September 2026 |

---

## Project Overview

Apex Exotic Motors is a luxury vehicle dealership website developed for the WEDE5020 Web Development POE. The website showcases luxury vehicles including supercars, luxury SUVs, and executive cars. The site provides information about the dealership, vehicle listings, an enquiry form, and contact details.

**Business Name:** Apex Exotic Motors  
**Industry:** Automotive - Luxury Vehicles  
**Target Audience:** High-net-worth individuals, car enthusiasts, business executives  
**Locations:** Sandton (Johannesburg) and Polokwane

---

## Website Goals and Objectives

1. **Increase Brand Awareness:** Establish Apex Exotic Motors as a premium luxury vehicle dealership in South Africa.
2. **Generate Leads:** Allow potential customers to enquire about vehicles through the enquiry form.
3. **Showcase Inventory:** Display available vehicles with images, descriptions, and specifications.
4. **Provide Contact Information:** Make it easy for customers to visit showrooms or get in touch.
5. **Build Trust:** Share the company story, mission, vision, and values to build credibility.

---

## Key Features and Functionality

| Feature | Description |
|---------|-------------|
| **Homepage** | Hero banner, featured brands, benefits, collection preview, testimonial, quick facts |
| **About Page** | Company story, purpose, mission, vision, core values, founder info, promise |
| **Vehicles Page** | Vehicle categories (Supercars, Luxury SUVs, Executive Cars) with images and specs |
| **Comparison Table** | Compare vehicle specifications side by side |
| **Enquiry Page** | Form for customers to enquire about vehicles with validation |
| **Contact Page** | Showroom addresses, business hours, contact form, Google Maps location |
| **Social Media** | Links to Instagram, TikTok, YouTube, LinkedIn, WhatsApp |
| **Responsive Design** | Adapts to desktop, tablet, and mobile screens |

---
Apex Exotic Motors Website
│
├── index.html (Home)
│ ├── Hero Banner
│ ├── Featured Brands
│ ├── Why Choose Apex
│ ├── Our Collection
│ ├── Customer Experience
│ ├── Quick Facts
│ └── Social Media
│
├── about.html (About Us)
│ ├── About Introduction
│ ├── Our Purpose
│ ├── Mission & Vision
│ ├── Core Values
│ ├── Founder Section
│ ├── Our Promise
│ └── Social Media
│
├── products.html (Vehicles)
│ ├── Supercars
│ ├── Luxury SUVs
│ ├── Executive Cars
│ ├── Comparison Table
│ ├── Finance Available
│ └── Social Media
│
├── enquiry.html (Enquiry)
│ ├── Enquiry Introduction
│ ├── Enquiry Form
│ └── Social Media
│
└── contact.html (Contact)
├── Showroom Information
├── Business Hours
├── Google Maps Location
├── Contact Form
└── Social Media



---

## Screenshots

### Desktop View (1920x1080)
<img width="1696" height="852" alt="image" src="https://github.com/user-attachments/assets/ca67e620-8f26-44fb-905d-cd36a7507619" />

### Tablet View (768px)
<img width="1067" height="772" alt="image" src="https://github.com/user-attachments/assets/e8118c4d-d60d-46e5-9b4b-0e0ec961832e" />

### Mobile View (480px)
<img width="937" height="732" alt="image" src="https://github.com/user-attachments/assets/db567930-8db5-4ce5-971d-c8d6d4ae5666" />


---

## Changelog

### Version 2.0 - Part 2 Submission (September 2026)

---

### Part 1 Corrections Applied

These changes were made based on the feedback received from the Part 1 marking.

| # | Issue | Fix Applied | Files Changed | Status |
|---|-------|-------------|---------------|--------|
| 1 | Internal links opened in new tabs | Removed `target="_blank"` from ALL internal links | ALL HTML pages | ✅ Fixed |
| 2 | Image had space in filename | Renamed `range rover.jpg` to `range-rover.jpg` | products.html, images/ | ✅ Fixed |
| 3 | Comments too brief | Added detailed comments explaining each section | ALL HTML pages | ✅ Fixed |
| 4 | Some HTML5 elements missing | Ensured proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` | ALL HTML pages | ✅ Fixed |
| 5 | Logo not clickable | Wrapped `<h1>` in `<a href="index.html">` | ALL HTML pages | ✅ Fixed |
| 6 | No changelog provided | Created comprehensive changelog | README.md | ✅ Fixed |

---

### Detailed Part 1 Corrections

**1. Navigation Links Fixed**
- **Date:** 06 September 2026
- **Problem:** Internal navigation links had `target="_blank"` which opened pages in new tabs.
- **Fix:** Removed `target="_blank"` from ALL internal links across all 5 HTML pages.
- **Files Changed:** index.html, about.html, products.html, enquiry.html, contact.html
- **Status:** ✅ Completed

**2. Image Filename Fixed**
- **Date:** 06 September 2026
- **Problem:** Image file `range rover.jpg` contained a space in the filename. Spaces in URLs can cause broken links.
- **Fix:** Renamed file from `range rover.jpg` to `range-rover.jpg` and updated the file path in products.html.
- **Files Changed:** images/range-rover.jpg (renamed), products.html (updated path)
- **Status:** ✅ Completed

**3. HTML Comments Improved**
- **Date:** 06 September 2026
- **Problem:** Comments were too brief and did not fully explain the code.
- **Fix:** Added detailed comments to ALL HTML pages explaining each section, its purpose, and how it works.
- **Files Changed:** index.html, about.html, products.html, enquiry.html, contact.html
- **Status:** ✅ Completed

**4. HTML5 Semantic Elements Corrected**
- **Date:** 06 September 2026
- **Problem:** Some pages were missing proper HTML5 semantic elements.
- **Fix:** Ensured ALL pages use `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` correctly.
- **Files Changed:** ALL HTML pages
- **Status:** ✅ Completed

**5. Logo Made Clickable**
- **Date:** 06 September 2026
- **Problem:** The logo was not clickable. Users expect to click the logo to return to the homepage.
- **Fix:** Wrapped the `<h1>` inside an `<a href="index.html">` tag on ALL pages.
- **Files Changed:** index.html, about.html, products.html, enquiry.html, contact.html
- **Status:** ✅ Completed

**6. Changelog Added**
- **Date:** 06 September 2026
- **Problem:** No changelog was provided in Part 1.
- **Fix:** Created this comprehensive changelog documenting ALL changes.
- **Files Changed:** README.md
- **Status:** ✅ Completed

---

### New Part 2 Features Added

| # | Feature | Description | Files Changed | Status |
|---|---------|-------------|---------------|--------|
| 7 | External CSS | Created `css/style.css` linked to ALL HTML pages | css/style.css, ALL HTML pages | ✅ Added |
| 8 | CSS Reset | Removed default browser margins/padding using `* { margin:0; padding:0; box-sizing:border-box; }` | css/style.css | ✅ Added |
| 9 | Default Styles | Set font family, font size, colour scheme, margin, padding for body | css/style.css | ✅ Added |
| 10 | Typography Styles | Applied `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing` to headings and paragraphs | css/style.css | ✅ Added |
| 11 | Layout Structure | Used CSS Flexbox for navigation, featured brands, collection, product cards, and social media | css/style.css | ✅ Added |
| 12 | Visual Styles | Added `color`, `background-color`, `border`, `box-shadow` to sections, cards, and buttons | css/style.css | ✅ Added |
| 13 | Pseudo-classes | Added `:hover` (nav, buttons, cards, social media), `:focus` (form inputs), `:active` (nav links) | css/style.css | ✅ Added |
| 14 | Responsive Design - Tablet | Media query for 768px: 2-column layout, smaller fonts, compact navigation | css/style.css | ✅ Added |
| 15 | Responsive Design - Mobile | Media query for 480px: 1-column layout, smaller fonts, stacked navigation, full-width forms | css/style.css | ✅ Added |
| 16 | Product Cards | Added card-style layout to products.html matching the homepage collection | products.html, css/style.css | ✅ Added |

---

### Detailed Part 2 Features

**7. External CSS File Created**
- **Date:** 06 September 2026
- **Description:** Created `css/style.css` and linked it to ALL HTML pages using `<link rel="stylesheet" href="css/style.css">`.
- **Files Changed:** css/style.css (NEW), ALL HTML pages (updated)
- **Status:** ✅ Completed

**8. CSS Reset Added**
- **Date:** 06 September 2026
- **Description:** Added a CSS reset to ensure consistent styling across all browsers.
- **Details:** `* { margin: 0; padding: 0; box-sizing: border-box; }`
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**9. Default Styles Added**
- **Date:** 06 September 2026
- **Description:** Set default styles for the entire website.
- **Details:**
  - Font family: Arial, Helvetica, sans-serif
  - Font size: 16px
  - Line height: 1.6
  - Colour scheme: #1a1a1a (dark) on #ffffff (white)
  - Body padding: 20px
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**10. Typography Styles Added**
- **Date:** 06 September 2026
- **Description:** Applied typography styles to all headings and paragraphs.
- **Details:**
  - h1: 2.5rem, font-weight 700, letter-spacing 1px
  - h2: 2rem, font-weight 600
  - h3: 1.5rem, font-weight 500
  - p: 1rem, line-height 1.8, letter-spacing 0.3px
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**11. Layout Structure Added (Flexbox)**
- **Date:** 06 September 2026
- **Description:** Used CSS Flexbox for layout structure.
- **Details:**
  - Navigation: Flexbox for horizontal layout
  - Featured brands: Flexbox with wrap
  - Collection: Flexbox with wrap
  - Product cards: Flexbox with wrap
  - Social media: Flexbox with wrap
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**12. Visual Styles Added**
- **Date:** 06 September 2026
- **Description:** Added decorative styles using CSS properties.
- **Details:**
  - Background colours: #1a1a1a, #f8f8f8, #ffffff
  - Border: 1px solid #e0e0e0
  - Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
  - Border-radius: 8px on sections, cards, and buttons
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**13. Pseudo-classes Added**
- **Date:** 06 September 2026
- **Description:** Added hover, focus, and active pseudo-classes.
- **Details:**
  - `:hover` on navigation links (background changes to gold)
  - `:hover` on call-to-action buttons (colour swap)
  - `:hover` on product cards (lift up effect with shadow)
  - `:hover` on social media links (colour change and scale)
  - `:hover` on table rows (background change)
  - `:focus` on form inputs (border colour + shadow glow)
  - `:active` on navigation links (darker background)
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**14. Responsive Design - Tablet Breakpoint Added**
- **Date:** 06 September 2026
- **Description:** Added media query for tablet devices (max-width: 768px).
- **Details:**
  - Typography: Smaller font sizes
  - Layout: 2 columns for collection items
  - Navigation: More compact padding
  - Forms: Full width inputs
  - Social media: Smaller buttons
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**15. Responsive Design - Mobile Breakpoint Added**
- **Date:** 06 September 2026
- **Description:** Added media query for mobile devices (max-width: 480px).
- **Details:**
  - Typography: Even smaller font sizes
  - Layout: Single column for ALL items
  - Navigation: Wraps and stacks
  - Forms: Full width with full-width submit button
  - Social media: Stacked vertically
  - Images: Scale to 100% width
  - Table: Smaller text
  - Map iframe: Smaller height (250px)
- **Files Changed:** css/style.css
- **Status:** ✅ Completed

**16. Product Cards Added**
- **Date:** 06 September 2026
- **Description:** Added card-style layout to products.html to match the homepage.
- **Details:**
  - Products now display as cards with images, heading, and description
  - Flexbox grid layout: 3 cards per row on desktop
  - Hover effect: Cards lift up on hover
- **Files Changed:** products.html, css/style.css
- **Status:** ✅ Completed

---

## References

### HTML References

1. W3Schools. (2026). *HTML Tutorial*. Available at: https://www.w3schools.com/html/ [Accessed 6 September 2026].

2. W3Schools. (2026). *HTML5 Semantic Elements*. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp [Accessed 6 September 2026].

3. Mozilla Developer Network. (2026). *HTML Elements Reference*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element [Accessed 6 September 2026].

### CSS References

4. W3Schools. (2026). *CSS Tutorial*. Available at: https://www.w3schools.com/css/ [Accessed 6 September 2026].

5. W3Schools. (2026). *CSS Flexbox*. Available at: https://www.w3schools.com/css/css3_flexbox.asp [Accessed 6 September 2026].

6. W3Schools. (2026). *CSS Media Queries*. Available at: https://www.w3schools.com/css/css3_mediaqueries.asp [Accessed 6 September 2026].

7. Mozilla Developer Network. (2026). *CSS Pseudo-classes*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes [Accessed 6 September 2026].

8. W3Schools. (2026). *CSS Box Shadow*. Available at: https://www.w3schools.com/css/css3_shadows_box.asp [Accessed 6 September 2026].

9. W3Schools. (2026). *CSS Transitions*. Available at: https://www.w3schools.com/css/css3_transitions.asp [Accessed 6 September 2026].

### Image Sources

10. Ferrari Media Centre. (2026). *Ferrari 296 GTB Images*. Available at: https://media.ferrari.com [Accessed 6 September 2026].

11. Lamborghini Press Kit. (2026). *Lamborghini Huracán EVO Images*. Available at: https://www.lamborghini.com [Accessed 6 September 2026].

12. Mercedes-Benz Media. (2026). *Mercedes-Benz G63 AMG Images*. Available at: https://media.mercedes-benz.com [Accessed 6 September 2026].

13. BMW Media Centre. (2026). *BMW M5 Competition Images*. Available at: https://www.bmw.com [Accessed 6 September 2026].

14. Audi Media Centre. (2026). *Audi RS7 Images*. Available at: https://www.audi.com [Accessed 6 September 2026].

15. Range Rover Media. (2026). *Range Rover Sport Images*. Available at: https://www.landrover.com [Accessed 6 September 2026].

16. Google Maps. (2026). *Sandton, Johannesburg Location*. Available at: https://maps.google.com [Accessed 6 September 2026].

---


## Conclusion

This website meets all Part 2 requirements including:

- ✅ External CSS linked to all pages
- ✅ Default styles and CSS reset
- ✅ Typography styles
- ✅ Layout using Flexbox
- ✅ Visual styles (colour, background, border, shadow)
- ✅ Pseudo-classes (hover, focus, active)
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ All Part 1 corrections applied
- ✅ Comprehensive changelog
- ✅ Correct references

---

**Submitted by:** Makgatspepe Mampuru  
**Student Number:** ST10299322  
**Date:** September 2026

