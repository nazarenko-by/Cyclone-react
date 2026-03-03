# Cyclone - Magazine Web Application

A modern, responsive magazine web application built with Next.js 15, React 19, and Redux Toolkit. Cyclone features a rich editorial layout with event sliders, article carousels, category pages, audio player, and more.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) + React Redux
- **Styling:** SCSS Modules
- **Carousel/Slider:** [Swiper.js](https://swiperjs.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Fonts:** Google Fonts via `next/font` - Proza Libre, Cormorant Garamond
- **Linting/Formatting:** ESLint + Prettier + Husky

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.jsx                # Home page
│   ├── layout.jsx              # Root layout (Header, Footer, Preloader)
│   ├── article/[id]/page.jsx   # Dynamic article page
│   ├── contacts/page.jsx
│   ├── design/page.jsx
│   ├── livestyle/page.jsx
│   ├── travel/page.jsx
│   ├── art/page.jsx
│   └── fashion/page.jsx
│
├── features/                   # Feature-based modules
│   ├── articles/               # Single article page
│   ├── articlesSlider/         # Horizontal article carousel
│   ├── categories/             # Category listing page
│   ├── contacts/               # Contact form + info
│   ├── events/                 # Events slider (full-screen)
│   ├── hotTopics/              # Hot Topics masonry grid
│   ├── main/                   # Main hero section + audio player
│   ├── mostRead/               # Most read articles grid
│   ├── subscribe/              # Email subscription form
│   └── ui/                     # Shared UI components
│       ├── ArrowButton/
│       ├── Footer/
│       ├── FollowUs/
│       ├── Header/
│       ├── LoadMoreButton/
│       ├── Logo/
│       ├── Navigation/
│       ├── Pagination/
│       ├── Preloader/
│       ├── ReadMore/
│       ├── Search/
│       ├── SocialActions/
│       └── Tags/
│
├── shared/
│   ├── helpers/                # Fonts config, date helpers
│   ├── hooks/                  # useDeviceType, useResizeObserver, useWindowWidth
│   ├── lib/                    # ApiService (Axios wrapper with caching)
│   └── utils/                  # API endpoint helpers
│
├── store/                      # Redux store
│   ├── index.js                # Store configuration
│   ├── Providers.jsx           # Redux Provider wrapper
│   ├── baseSlice.js            # Topics, loader state, async thunks
│   └── socialSlice.js          # Likes/dislikes state
│
└── styles/                     # Global and component SCSS
    ├── _variables.scss          # Design tokens (spacing, font sizes, breakpoints)
    ├── _text.scss               # Text fade utility mixins
    ├── globals.scss             # Global resets and utility classes
    └── components/             # Per-component stylesheets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/cyclone-react.git
cd cyclone-react
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Features

- **Events Slider** - Full-screen autoplay carousel with animated slide transitions
- **Article Slider** - Swiper-based carousel with prev/next article previews
- **Main Section** - Featured article with integrated audio player (play/pause, progress bar, track switching)
- **Hot Topics** - Responsive masonry-style grid with pagination and "Load More"
- **Most Read** - Circular hover-reveal cards for top articles
- **Category Pages** - Filtered article listings for Design, LiveStyle, Travel, Art, Fashion
- **Article Page** - Full article view with breadcrumbs, related articles, and social actions
- **Subscribe Form** - Email subscription with validation and animated feedback
- **Contact Page** - Contact form with validation + business info panel
- **Social Actions** - Like, comment, and share buttons per article
- **Preloader** - Animated logo preloader on initial load
- **Responsive Design** - Mobile-first layout with breakpoints at 480px, 768px, 1024px, 1200px

---

## Data

Topics are fetched from a remote JSON file hosted on GitHub:

```
https://raw.githubusercontent.com/nazarenko-by/Cyclone-react/data/topics.json
```

The `ApiService` utility handles request caching, abort controllers, and error logging.

---

## Navigation

| Route | Description |
|---|---|
| `/` | Home - all main sections |
| `/design` | Design category |
| `/livestyle` | LiveStyle category |
| `/travel` | Travel category |
| `/art` | Art category |
| `/fashion` | Fashion category |
| `/article/[id]` | Single article |
| `/contacts` | Contact page |

---

## License

This project is for educational/portfolio purposes.  
Design by **Fugue**. © Cyclone. All rights reserved.
