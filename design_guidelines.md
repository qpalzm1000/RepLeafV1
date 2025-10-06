# Design Guidelines: Autumn Leaf Removal Service Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from premium home service platforms (Thumbtack, TaskRabbit) combined with seasonal e-commerce aesthetics (L.L.Bean autumn campaigns). Focus on warmth, trust, and seasonal urgency.

## Core Design Principles
1. **Seasonal Authenticity**: Embrace autumn's natural beauty through warm, organic design
2. **Service Clarity**: Make services and booking process immediately obvious
3. **Trust Building**: Professional presentation with social proof and expertise highlights
4. **Conversion Focus**: Clear CTAs driving quote requests and bookings

## Color Palette

### Light Mode
- **Primary Brand**: 25 75% 45% (Deep autumn rust/burnt orange)
- **Secondary**: 35 65% 50% (Warm amber gold)
- **Accent**: 15 70% 40% (Rich burgundy) - Use sparingly for CTAs
- **Neutral Base**: 30 15% 95% (Warm off-white background)
- **Text Primary**: 25 25% 20% (Warm charcoal)
- **Text Secondary**: 25 15% 45% (Muted brown-gray)

### Dark Mode
- **Primary Brand**: 25 70% 55% (Lighter rust for contrast)
- **Background**: 25 20% 12% (Deep warm gray)
- **Surface**: 25 15% 18% (Elevated surface)
- **Text Primary**: 30 10% 95% (Warm white)

## Typography
- **Headings**: Playfair Display (serif) - weights 600, 700 for classic, trustworthy appeal
- **Body**: Inter - weights 400, 500, 600 for clean readability
- **Accent/CTAs**: Inter Medium (500) with letter-spacing for emphasis

## Layout System
**Spacing Primitives**: Tailwind units of 3, 4, 6, 8, 12, 16, 20, 24, 32
- Maintain consistent vertical rhythm with py-16 to py-24 for sections
- Container max-width: max-w-7xl with px-4 to px-8 responsive padding

## Component Library

### Navigation
- Sticky header with semi-transparent backdrop blur on scroll
- Logo left, navigation center, "Get Free Quote" CTA button right
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- **Layout**: Full-viewport asymmetric layout (60/40 split)
- **Left Side**: Large hero image showing beautiful autumn leaves/yard transformation
- **Right Side**: Floating card overlay with:
  - Compelling headline: "Fall Leaf Cleanup Made Simple"
  - Subheadline emphasizing seasonal availability
  - Primary CTA: "Get Free Quote" (accent color, large size)
  - Secondary elements: Trust indicators (years in business, satisfied customers)
- **Background**: Subtle autumn leaf pattern overlay at 5% opacity

### Services Grid
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each service card includes:
  - Icon (leaf, rake, truck - use Heroicons)
  - Service name in heading font
  - Brief description (2-3 lines)
  - "Starting at $XX" pricing indicator
  - Hover effect: subtle lift and shadow

### Before/After Gallery
- 2-column masonry layout showcasing transformation photos
- Image comparison slider for interactive engagement
- Caption overlays with location/service type

### Pricing Section
- Tiered pricing cards in 3-column layout
- Clear package names (Basic, Standard, Premium)
- Checkmark list of included services
- Standout "Most Popular" badge on middle tier

### Testimonials
- Carousel with 2 testimonials visible at once on desktop
- Customer photo, name, location, rating stars
- Background: warm surface color with subtle texture

### Contact/Quote Form
- 2-column layout: Form left, company info/map right
- Form fields: Name, Email, Phone, Property Size, Service Needed, Message
- Large submit button: "Request Your Free Quote"
- Trust badges: Licensed, Insured, Satisfaction Guaranteed

### Footer
- 4-column layout: About, Services, Contact, Social/Newsletter
- Newsletter signup with autumn-themed incentive
- Social media icons, business hours, service area information
- Copyright and seasonal tagline

## Images
**Critical Visual Assets**:
1. **Hero Image**: High-quality photo of pristine autumn yard with colorful leaves, professional crew at work, warm afternoon lighting
2. **Before/After Gallery**: 6-8 transformation photos showing yard coverage vs. clean results
3. **Service Icons**: Illustrated icons for leaf blowing, raking, hauling (from Heroicons library)
4. **Team Photo**: Friendly crew with equipment in About section
5. **Background Textures**: Subtle fallen leaf patterns for section dividers

## Interactions & Animation
- **Minimal, purposeful animations**:
  - Smooth scroll to sections
  - Fade-in on scroll for testimonials/stats
  - Hover lifts on service cards (translate-y-1)
  - Button scale on hover (scale-105)
- **No**: Parallax effects, complex scroll animations, distracting movements

## Responsive Behavior
- Hero: Stacked single column on mobile with full-width image above content
- Services: 1 column mobile, 2 columns tablet, 3 columns desktop
- Pricing: Stacked cards on mobile with horizontal scroll option
- Navigation: Collapse to hamburger menu below 768px
- Form: Single column on mobile, maintain 2-column desktop layout

## Accessibility & Dark Mode
- Maintain all text contrast ratios above 4.5:1
- Form inputs with clear labels and focus states
- Dark mode uses warmer background tones (not pure black)
- All interactive elements have visible focus indicators

This design creates a warm, trustworthy, and conversion-focused experience that captures autumn's essence while establishing professional credibility for the seasonal service business.