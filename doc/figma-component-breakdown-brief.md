# COMPREHENSIVE FIGMA DESIGN ANALYSIS & COMPONENT BREAKDOWN BRIEF
## For: Staycation Website Design (Figma Node ID: 71-8)
## Design URL: https://www.figma.com/design/m5YhDhZrGPjA13YrGjfTf7/Staycation-Website?node-id=71-8&t=hkfMQzNdeW2MtOAD-4

---

> **Note**: This document serves as a comprehensive framework for breaking down the Staycation Website Figma design into clean, maintainable React components following Clean Architecture principles.

---

## SECTION 1: DESIGN ANALYSIS FRAMEWORK

### 1.1 OVERALL LAYOUT STRUCTURE

```
Layout Pattern: [ ] Single Page Scroll    [ ] Multi-page    [ ] Dashboard
Grid System:    [ ] 12-column            [ ] 8-column       [ ] Custom (specify): _____
Container Type: [ ] Fixed-width           [ ] Fluid          [ ] Responsive
Max Width:      _____ px (typically 1200px, 1440px, or 1920px)
Breakpoints:    • Mobile: _____ px
                • Tablet: _____ px
                • Desktop: _____ px
                • Wide: _____ px
```

**Section Hierarchy (document from top to bottom):**
```
1. Header/Navigation
   - Logo placement: [left/center/right]
   - Navigation menu: [horizontal/vertical/hamburger]
   - CTA buttons: [specify]

2. Hero Section
   - Height: _____ px or _____ vh
   - Background: [color/image/video]
   - Main headline specs

3. Content Sections (list each)
   - Section name
   - Purpose
   - Key components

4. Footer
   - Number of columns
   - Content types
```

### 1.2 COLOR PALETTE SPECIFICATIONS

| Color Name | Hex Code | RGB | Usage Context | Design Token |
|------------|----------|-----|---------------|--------------|
| Primary | | | Buttons, links, accents | `--color-primary` |
| Secondary | | | Secondary actions | `--color-secondary` |
| Background - Main | | | Page background | `--color-bg-main` |
| Background - Section | | | Section backgrounds | `--color-bg-section` |
| Background - Card | | | Card backgrounds | `--color-bg-card` |
| Text - Primary | | | Headings, body text | `--color-text-primary` |
| Text - Secondary | | | Captions, metadata | `--color-text-secondary` |
| Border | | | Dividers, borders | `--color-border` |
| Success | | | Success states | `--color-success` |
| Warning | | | Warning states | `--color-warning` |
| Error | | | Error states | `--color-error` |
| Overlay | | | Modal backdrops | `--color-overlay` |

**Gradient Specifications (if applicable):**
```
Gradient 1: From _____ to _____ at _____ degrees
Gradient 2: From _____ to _____ at _____ degrees
```

### 1.3 TYPOGRAPHY SYSTEM

| Element | Font Family | Size | Weight | Line Height | Letter Spacing | Design Token |
|---------|-------------|------|--------|-------------|----------------|--------------|
| H1 | | | | | | `--typography-h1` |
| H2 | | | | | | `--typography-h2` |
| H3 | | | | | | `--typography-h3` |
| H4 | | | | | | `--typography-h4` |
| Body Large | | | | | | `--typography-body-large` |
| Body | | | | | | `--typography-body` |
| Body Small | | | | | | `--typography-body-small` |
| Caption | | | | | | `--typography-caption` |
| Button Text | | | | | | `--typography-button` |
| Navigation | | | | | | `--typography-nav` |

### 1.4 SPACING SYSTEM (Design Tokens)

```
--space-xs:    4px   (0.25rem)
--space-sm:    8px   (0.5rem)
--space-md:    16px  (1rem)
--space-lg:    24px  (1.5rem)
--space-xl:    32px  (2rem)
--space-2xl:   48px  (3rem)
--space-3xl:   64px  (4rem)
--space-4xl:   96px  (6rem)
```

### 1.5 BORDER RADIUS

```
--radius-sm:    4px
--radius-md:    8px
--radius-lg:    16px
--radius-xl:    24px
--radius-full:  9999px (for pill shapes)
```

### 1.6 SHADOW SYSTEM

```
--shadow-xs:   0 1px 2px rgba(0,0,0,0.05)
--shadow-sm:   0 1px 3px rgba(0,0,0,0.1)
--shadow-md:   0 4px 6px rgba(0,0,0,0.1)
--shadow-lg:   0 10px 15px rgba(0,0,0,0.1)
--shadow-xl:   0 20px 25px rgba(0,0,0,0.15)
```

---

## SECTION 2: COMPONENT HIERARCHY BREAKDOWN

### 2.1 PAGE-LEVEL COMPONENTS

```
src/presentation/pages/
├── Home/
│   ├── index.tsx
│   └── Home.tsx
├── Detail/
│   ├── index.tsx
│   └── Detail.tsx
└── About/
    ├── index.tsx
    └── About.tsx
```

### 2.2 LAYOUT COMPONENTS

```
src/presentation/layouts/
├── MainLayout/
│   ├── index.tsx
│   ├── MainLayout.tsx
│   └── MainLayout.module.css
└── LayoutProduct/
    ├── index.tsx
    ├── LayoutProduct.tsx
    └── LayoutProduct.module.css
```

### 2.3 FEATURE COMPONENTS (Business Logic)

```
src/presentation/components/features/
├── landing/
│   ├── banner/
│   │   ├── index.tsx
│   │   ├── Banner.tsx
│   │   ├── Banner.types.ts
│   │   └── Banner.module.css
│   ├── popular/
│   │   ├── index.tsx
│   │   ├── Popular.tsx
│   │   ├── Popular.types.ts
│   │   └── Popular.module.css
│   ├── product/
│   │   ├── index.tsx
│   │   ├── Product.tsx
│   │   ├── Product.types.ts
│   │   └── Product.module.css
│   └── detail/
│       ├── index.tsx
│       ├── Detail.tsx
│       ├── Detail.types.ts
│       └── Detail.module.css
```

### 2.4 UI COMPONENTS (Reusable, No Business Logic)

```
src/presentation/components/ui/
├── button/
│   ├── index.tsx
│   ├── Button.tsx
│   ├── Button.types.ts
│   └── Button.module.css
├── card/
│   ├── index.tsx
│   ├── Card.tsx
│   ├── Card.types.ts
│   └── Card.module.css
├── input/
│   ├── index.tsx
│   ├── Input.tsx
│   ├── Input.types.ts
│   └── Input.module.css
├── modal/
│   ├── index.tsx
│   ├── Modal.tsx
│   ├── Modal.types.ts
│   └── Modal.module.css
├── navigation/
│   ├── index.tsx
│   ├── Navigation.tsx
│   ├── Navigation.types.ts
│   └── Navigation.module.css
├── footer/
│   ├── index.tsx
│   ├── Footer.tsx
│   ├── Footer.types.ts
│   └── Footer.module.css
├── breadcrumb/
│   ├── index.tsx
│   ├── Breadcrumb.tsx
│   ├── Breadcrumb.types.ts
│   └── Breadcrumb.module.css
├── loader/
│   ├── index.tsx
│   ├── Loader.tsx
│   └── Loader.module.css
└── testtimonial/
    ├── index.tsx
    ├── Testimonial.tsx
    ├── Testimonial.types.ts
    └── Testimonial.module.css
```

---

## SECTION 3: DETAILED COMPONENT SPECIFICATIONS

### 3.1 BANNER/HERO COMPONENT

```typescript
// Banner.types.ts
export interface BannerProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  alignment?: 'left' | 'center' | 'right';
  height?: 'sm' | 'md' | 'lg' | 'full';
}

// Visual Specifications
const bannerSpecs = {
  heights: {
    sm: '400px',
    md: '500px',
    lg: '600px',
    full: '100vh'
  },
  overlay: 'rgba(0, 0, 0, 0.4)',
  textAlignment: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
};
```

**Layout Structure:**
```
+---------------------------------------------------------+
|  Background Image (cover, center)                        |
|  +-----------------------------------------------------+  |
|  |  Overlay (darken)                                   |  |
|  |  +-------------------------------------------------+|  |
|  |  |  Content Container (max-width)                  ||  |
|  |  |  • Title (H1)                                   ||  |
|  |  |  • Subtitle (optional)                          ||  |
|  |  |  • Description paragraph                        ||  |
|  |  |  • CTA Buttons (flex row)                       ||  |
|  |  +-------------------------------------------------+|  |
|  +-----------------------------------------------------+  |
+---------------------------------------------------------+
```

### 3.2 PRODUCT CARD COMPONENT

```typescript
// Product.types.ts
export interface ProductCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  priceUnit?: string;
  rating?: number;
  reviewCount?: number;
  image: string;
  amenities?: string[];
  badge?: {
    text: string;
    variant?: 'popular' | 'new' | 'sale' | 'discount';
  };
  onClick?: () => void;
  variant?: 'default' | 'compact' | 'featured';
}

// Visual Specifications
const productCardSpecs = {
  variants: {
    default: {
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      imageHeight: '200px'
    },
    compact: {
      width: '100%',
      borderRadius: '12px',
      imageHeight: '150px'
    },
    featured: {
      width: '100%',
      borderRadius: '20px',
      imageHeight: '280px',
      shadow: 'lg'
    }
  }
};
```

**Layout Structure:**
```
+----------------------------------------------+
|  +----------------------------------------+   |
|  |  Product Image (cover)                 |   |
|  |  [Badge - top left/right]              |   |
|  |  [Heart icon - top right]              |   |
|  +----------------------------------------+   |
|  +----------------------------------------+   |
|  |  Product Name (h3 or h4)               |   |
|  |  Location (icon + text)                |   |
|  |  Price (large, bold)                   |   |
|  |  Rating (stars + count)                |   |
|  |  Amenities (icon row, max 4)           |   |
|  +----------------------------------------+   |
+----------------------------------------------+
```

### 3.3 DETAIL PAGE COMPONENT

```typescript
// Detail.types.ts
export interface DetailPageProps {
  product: {
    id: string;
    name: string;
    location: string;
    description: string;
    images: string[];
    price: number;
    priceUnit: string;
    rating: number;
    reviewCount: number;
    amenities: Array<{
      icon: string;
      name: string;
      available: boolean;
    }>;
    host: {
      name: string;
      avatar: string;
      responseRate: number;
      responseTime: string;
    };
    policies?: {
      cancellation?: string;
      houseRules?: string[];
    };
  };
  onBook?: (dates: DateRange) => void;
  onContactHost?: () => void;
}

// Layout Structure
const detailLayout = {
  sections: [
    'image-gallery',
    'breadcrumb',
    'title-section',
    'host-info',
    'description',
    'amenities',
    'policies',
    'reviews',
    'booking-widget'
  ]
};
```

---

## SECTION 4: INTERACTIVE ELEMENTS & BEHAVIORS

### 4.1 BUTTON COMPONENT

```typescript
// Button.types.ts
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// State Specifications
const buttonStates = {
  default: {
    background: 'var(--color-primary)',
    color: 'var(--color-text-inverse)',
    border: 'none'
  },
  hover: {
    background: 'shade of primary',
    transform: 'translateY(-2px)',
    shadow: 'md'
  },
  active: {
    transform: 'translateY(0)',
    shadow: 'sm'
  },
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
    transform: 'none'
  },
  focus: {
    outline: '2px solid var(--color-primary)',
    outlineOffset: '2px'
  }
};
```

### 4.2 NAVIGATION BEHAVIORS

```typescript
// Navigation interaction specifications
const navBehaviors = {
  mobile: {
    breakpoint: '< 768px',
    menuType: 'drawer/off-canvas',
    trigger: 'hamburger icon',
    animation: 'slide from right'
  },
  desktop: {
    breakpoint: '>= 768px',
    menuType: 'horizontal',
    dropdownAnimation: 'fade + slide down',
    hoverDelay: 150
  },
  scroll: {
    behavior: 'sticky at top',
    shadowOnScroll: true,
    heightChange: true
  }
};
```

### 4.3 CARD INTERACTIONS

```typescript
const cardInteractions = {
  hover: {
    elevation: 'shadow-lg',
    transform: 'translateY(-4px)',
    transitionDuration: 200
  },
  click: {
    feedback: 'scale(0.98)',
    duration: 100
  },
  focus: {
    outline: '2px solid var(--color-primary)',
    outlineOffset: '4px',
    radius: 'inherit'
  }
};
```

---

## SECTION 5: DATA STRUCTURE & API INTEGRATION

### 5.1 RECOMMENDED DATA MODELS

```typescript
// src/domain/entities/Product.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  pricing: {
    basePrice: number;
    currency: string;
    unit: 'night' | 'day' | 'hour';
    cleaningFee?: number;
    serviceFee?: number;
  };
  images: {
    url: string;
    alt: string;
    isPrimary?: boolean;
  }[];
  amenities: Amenity[];
  host: Host;
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  ratings: {
    overall: number;
    cleanliness: number;
    communication: number;
    checkIn: number;
    accuracy: number;
    location: number;
    value: number;
    totalReviews: number;
  };
  description: {
    short: string;
    full: string;
  };
  availability: {
    minimumStay: number;
    maximumStay?: number;
    checkInTime: string;
    checkOutTime: string;
  };
  tags?: string[];
  status: 'active' | 'inactive' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  category: 'essential' | 'comfort' | 'luxury' | 'activity';
  available: boolean;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  responseRate: number;
  responseTime: string;
  memberSince: Date;
  languages: string[];
  about?: string;
}
```

### 5.2 API ENDPOINTS SPECIFICATION

```typescript
// src/infrastructure/api/endpoints.ts
export const API_ENDPOINTS = {
  // Product endpoints
  PRODUCTS: {
    LIST: '/api/products',
    DETAIL: '/api/products/:id',
    SEARCH: '/api/products/search',
    FEATURED: '/api/products/featured',
    POPULAR: '/api/products/popular',
  },

  // Booking endpoints
  BOOKINGS: {
    CREATE: '/api/bookings',
    CHECK_AVAILABILITY: '/api/bookings/check-availability',
    LIST: '/api/bookings',
    CANCEL: '/api/bookings/:id/cancel',
  },

  // Review endpoints
  REVIEWS: {
    LIST: '/api/products/:id/reviews',
    CREATE: '/api/products/:id/reviews',
  },

  // User endpoints
  USERS: {
    PROFILE: '/api/users/profile',
    FAVORITES: '/api/users/favorites',
  },
} as const;
```

---

## SECTION 6: ACCESSIBILITY REQUIREMENTS

### 6.1 WCAG 2.1 COMPLIANCE CHECKLIST

```typescript
// Accessibility specifications
const a11yRequirements = {
  colorContrast: {
    normalText: '4.5:1 minimum',
    largeText: '3:1 minimum',
    uiComponents: '3:1 minimum',
    graphicalObjects: '3:1 minimum'
  },

  keyboardNavigation: {
    tabOrder: 'logical DOM order',
    focusVisible: '2px outline indicator',
    skipLinks: 'jump to main content, skip navigation',
    trapFocus: 'modals and dropdowns'
  },

  semanticHtml: {
    landmarks: 'header, nav, main, article, section, aside, footer',
    headings: 'proper hierarchy (h1-h6), no skips',
    lists: 'ul/ol for list items, not divs',
    buttons: 'button elements, not divs with onclick'
  },

  ariaAttributes: {
    labels: 'aria-label for icons without text',
    descriptions: 'aria-describedby for additional context',
    expanded: 'aria-expanded for dropdowns/accordions',
    live: 'aria-live for dynamic content announcements',
    roles: 'role attribute only when necessary'
  },

  screenReader: {
    altText: 'descriptive alt for all images',
    formLabels: 'associated labels for all inputs',
    errorMessages: 'announced via aria-live or aria-describedby',
    statusMessages: 'role="status" or aria-live="polite"'
  }
};
```

### 6.2 COMPONENT-SPECIFIC A11Y REQUIREMENTS

```typescript
// Button accessibility
interface ButtonA11yProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-pressed'?: boolean;
  'aria-expanded'?: boolean;
  role?: 'button' | 'submit' | 'reset';
}

// Modal accessibility
interface ModalA11yProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  role: 'dialog';
  'aria-modal': true;
}

// Card accessibility
interface CardA11yProps {
  role?: 'article' | 'link';
  'aria-label'?: string;
  tabIndex?: 0;
}
```

---

## SECTION 7: PROMPT FOR REACT-COMPONENT-SLICER AGENT

Below is the comprehensive prompt to pass to the component slicer agent:

---

### REACT COMPONENT BREAKDOWN REQUEST
### Project: Staycation Website Implementation
### Design Source: Figma (Staycation-Website, Node ID: 71-8)

#### OBJECTIVE

Break down the provided Figma design into clean, maintainable React components following Clean Architecture principles. The components should be production-ready with proper TypeScript typing, accessibility, and responsive design.

#### ARCHITECTURE PRINCIPLES

1. **Clean Architecture Layering:**
   - **Domain Layer**: Business entities and interfaces (no framework dependencies)
   - **Application Layer**: Use cases and application logic
   - **Infrastructure Layer**: External services, API calls, persistence
   - **Presentation Layer**: UI components, pages, layouts

2. **Component Organization:**
   - **UI Components**: Reusable, presentational, no business logic
   - **Feature Components**: Business logic, domain-specific
   - **Layout Components**: Page structure and composition
   - **Page Components**: Route-level components, orchestration only

3. **Design Principles:**
   - Single Responsibility Principle (SRP)
   - Don't Repeat Yourself (DRY)
   - Composition over Inheritance
   - Explicit Props over Implicit Context
   - TypeScript-first approach

#### PROJECT STRUCTURE TO FOLLOW

```
src/
├── domain/
│   ├── entities/
│   │   ├── Product.ts
│   │   ├── User.ts
│   │   ├── Booking.ts
│   │   └── Review.ts
│   └── repositories/
│       ├── ProductRepository.interface.ts
│       └── BookingRepository.interface.ts
│
├── application/
│   ├── use-cases/
│   │   ├── GetProductList.ts
│   │   ├── GetProductDetail.ts
│   │   └── CreateBooking.ts
│   └── services/
│       └── ProductService.ts
│
├── infrastructure/
│   ├── api/
│   │   ├── client.ts
│   │   └── endpoints.ts
│   └── persistence/
│       └── mock.ts (or real implementation)
│
└── presentation/
    ├── pages/
    │   ├── Home/
    │   ├── Detail/
    │   └── [other pages]
    ├── layouts/
    │   ├── MainLayout/
    │   └── LayoutProduct/
    ├── components/
    │   ├── features/
    │   │   ├── landing/
    │   │   │   ├── banner/
    │   │   │   ├── popular/
    │   │   │   └── product/
    │   │   └── detail/
    │   │       └── [detail components]
    │   └── ui/
    │       ├── button/
    │       ├── card/
    │       ├── input/
    │       ├── modal/
    │       ├── navigation/
    │       ├── footer/
    │       ├── breadcrumb/
    │       ├── loader/
    │       └── testtimonial/
    └── hooks/
        └── [custom hooks]
```

#### COMPONENT CREATION REQUIREMENTS

For each component you create, ensure:

##### 1. File Structure
```typescript
// Component/index.tsx - Export barrel
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';

// Component/ComponentName.tsx - Main component
// Component/ComponentName.types.ts - TypeScript interfaces
// Component/ComponentName.module.css - Styled components (or use styled-components/tailwind)
```

##### 2. TypeScript Requirements
```typescript
// Always export props interface
export interface ComponentNameProps {
  // Required props
  requiredProp: string;

  // Optional props with defaults
  optionalProp?: string;

  // Union types for variants
  variant?: 'primary' | 'secondary' | 'tertiary';

  // Event handlers
  onClick?: () => void;

  // Children for composition
  children?: React.ReactNode;
}

// Use generic types where appropriate
export interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
}
```

##### 3. Component Template
```typescript
import React from 'react';
import styles from './ComponentName.module.css';
import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  requiredProp,
  optionalProp = 'default value',
  variant = 'primary',
  onClick,
  children,
}) => {
  // Component logic here

  return (
    <div className={`${styles.base} ${styles[variant]}`}>
      {/* JSX content */}
    </div>
  );
};
```

##### 4. Accessibility Requirements
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation
- Add focus indicators
- Include alt text for images
- Use proper heading hierarchy
- Implement skip links for navigation
- Test with screen reader in mind

##### 5. Styling Approach
- Use CSS Modules (as in current project)
- Follow design token system for consistency
- Implement responsive breakpoints
- Include hover, focus, active states
- Add transitions for smooth interactions

#### SPECIFIC COMPONENTS TO CREATE

Based on the Figma design, create the following component breakdown:

##### Priority 1: Core UI Components
1. **Button** - All variants (primary, secondary, outline, ghost)
2. **Card** - Base card with variants
3. **Input** - Text input with validation states
4. **Modal** - Overlay modal with animation
5. **Navigation** - Responsive navigation with mobile drawer

##### Priority 2: Feature Components
6. **Banner/Hero** - Full-width hero with CTA
7. **ProductCard** - Display product information
8. **ProductGrid** - Grid layout for product cards
9. **Testimonial** - Customer review/testimonial display
10. **Breadcrumb** - Navigation breadcrumb trail

##### Priority 3: Layout Components
11. **MainLayout** - Base layout with header/footer
12. **LayoutProduct** - Product detail page layout
13. **Footer** - Site footer with links

##### Priority 4: Page Components
14. **HomePage** - Landing page composition
15. **DetailPage** - Product detail page composition

#### DATA FLOW ARCHITECTURE

```typescript
// Repository Pattern
interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  findByLocation(location: string): Promise<Product[]>;
}

// Use Case Pattern
class GetProductDetailUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product> {
    return this.productRepository.findById(id);
  }
}

// React Hook for Presentation
export function useProductDetail(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getProductDetailUseCase.execute(id)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}
```

#### DESIGN TOKENS TO IMPLEMENT

```css
:root {
  /* Colors */
  --color-primary: #HEX;
  --color-secondary: #HEX;
  --color-accent: #HEX;
  --color-success: #HEX;
  --color-warning: #HEX;
  --color-error: #HEX;
  --color-bg-main: #HEX;
  --color-bg-section: #HEX;
  --color-bg-card: #HEX;
  --color-text-primary: #HEX;
  --color-text-secondary: #HEX;
  --color-border: #HEX;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Typography */
  --font-family-base: 'Font Name', sans-serif;
  --font-family-heading: 'Font Name', sans-serif;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

#### RESPONSIVE BREAKPOINTS

```typescript
// Breakpoint constants
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Media query helper
export const media = {
  sm: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  md: `@media (min-width: ${BREAKPOINTS.md}px)`,
  lg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  xl: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `@media (min-width: ${BREAKPOINTS['2xl']}px)`,
};
```

#### OUTPUT EXPECTATIONS

For each component, provide:

1. **Component Code**: Complete React functional component with TypeScript
2. **Props Interface**: Full TypeScript interface with JSDoc comments
3. **Styles**: CSS Modules or styled-components
4. **Story/Example**: Usage example with sample data
5. **Test Cases**: Recommended unit test scenarios

#### DELIVERABLE FORMAT

Please organize your output as:

```
## Component: [ComponentName]

### Description
[Brief description of component purpose and usage context]

### Props Interface
```typescript
// Props interface code
```

### Component Code
```typescript
// Component implementation
```

### Styles
```css
/* Component styles */
```

### Usage Example
```tsx
// Example usage
```

### Accessibility Notes
[Accessibility features implemented]

### Testing Considerations
[What should be tested]
```

---

## SECTION 8: IMPLEMENTATION CHECKLIST

Use this checklist to ensure complete implementation:

### Design System Foundation
- [ ] Extract all color values and create CSS custom properties
- [ ] Document typography scale and font specifications
- [ ] Define spacing system with design tokens
- [ ] Create border radius scale
- [ ] Document shadow/elevation system
- [ ] Define responsive breakpoints
- [ ] Create animation/transition specifications

### UI Components (Atomic Level)
- [ ] Button component with all variants
- [ ] Input component with validation states
- [ ] Card component base implementation
- [ ] Badge/Tag component
- [ ] Icon wrapper component
- [ ] Avatar component
- [ ] Modal/Dialog component
- [ ] Tooltip component
- [ ] Dropdown component
- [ ] Pagination component

### Feature Components (Molecular Level)
- [ ] Navigation (desktop + mobile)
- [ ] Footer with all sections
- [ ] Product Card with hover states
- [ ] Testimonial card
- [ ] Search/Filter component
- [ ] Booking form
- [ ] Image gallery
- [ ] Rating display
- [ ] Price display
- [ ] Amenity list

### Layout Components
- [ ] Main layout wrapper
- [ ] Product detail layout
- [ ] Grid system
- [ ] Container component
- [ ] Section wrapper

### Page Components
- [ ] Home page composition
- [ ] Detail page composition
- [ ] About page (if exists)
- [ ] Contact page (if exists)

### Integration
- [ ] API integration for product data
- [ ] State management setup
- [ ] Routing configuration
- [ ] Error handling
- [ ] Loading states

### Accessibility
- [ ] Color contrast audit
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] ARIA attributes implementation
- [ ] Focus management
- [ ] Skip links implementation

### Performance
- [ ] Image optimization
- [ ] Code splitting setup
- [ ] Lazy loading implementation
- [ ] Bundle size optimization

---

## SECTION 9: NOTES FOR COMPLETION

### How to Complete This Brief

To complete this brief with actual design specifications from Figma:

1. **Open the Figma design** at:
   https://www.figma.com/design/m5YhDhZrGPjA13YrGjfTf7/Staycation-Website?node-id=71-8&t=hkfMQzNdeW2MtOAD-4

2. **Extract design specifications** manually or using Figma's built-in features:
   - Use the Inspect panel to get exact values
   - Export design tokens using Figma Tokens plugin
   - Copy CSS values directly from Figma

3. **Fill in the specification tables** in Sections 1.2 through 1.6 with:
   - Exact hex codes for colors
   - Font family names, sizes, and weights
   - Spacing values in pixels
   - Border radius values
   - Shadow values

4. **Document component specifications** in Section 3 with:
   - Exact dimensions from the design
   - Layout constraints
   - Responsive behavior
   - Interaction specifications

5. **Export any assets** needed:
   - Icons as SVG
   - Images at appropriate resolutions
   - Logo files

### Using This Document with the react-component-slicer Agent

Once you have the design specifications filled in, pass the completed brief to the react-component-slicer agent:

```
Use this Task tool:
- subagent_type: "react-component-slicer"
- description: "Slice Staycation website components"
- prompt: [Copy the entire SECTION 7 content + your filled design specs]
```

---

## APPENDIX: QUICK REFERENCE

### File Naming Conventions
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Utilities: camelCase (e.g., `formatCurrency.ts`)
- Styles: kebab-case or module.css (e.g., `ProductCard.module.css`)
- Types: PascalCase.types.ts (e.g., `ProductCard.types.ts`)

### Import Order
```typescript
// 1. React imports
import React from 'react';

// 2. Third-party imports
import { Link } from 'react-router-dom';

// 3. Internal imports - components
import { Button } from '@/components/ui/button';

// 4. Internal imports - utilities
import { formatCurrency } from '@/utils/format';

// 5. Internal imports - types
import type { Product } from '@/types';

// 6. Styles
import styles from './Component.module.css';
```

### Git Commit Message Format
```
feat(scope): description

BREAKING CHANGE: description (if applicable)

Closes #[issue_number]
```

---

*This document was generated as a framework for the Staycation Website implementation. Fill in the design specifications from Figma to complete the brief for component slicing.*
