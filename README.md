# NetflixGPT - AI-Powered Movie Recommendation App

A modern Netflix-inspired web application that combines movie browsing with AI-powered recommendations using GPT technology. Built with React, Redux, Firebase, and Tailwind CSS.

## 🚀 Features

- **🔥 Firebase Authentication** - Secure user login/signup system
- **🎬 Movie Browsing** - Browse popular and now-playing movies
- **🤖 GPT Search** - AI-powered movie recommendations
- **📱 Fully Responsive** - Works perfectly on all devices
- **🎯 Modern UI** - Netflix-inspired interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast development and build tool

### Backend & Services
- **Firebase** - Authentication and database
- **TMDB API** - Movie data and trailers
- **OpenAI GPT** - AI-powered recommendations
- **YouTube API** - Video trailer embedding

## 📁 Project Structure

```
src/
├── components/          # React components
├── customHooks/         # Custom React hooks
├── utils/              # Utility functions and Redux slices
└── assets/             # Static assets
```

---

## 🧩 Components Detailed Guide

### 🏠 App.jsx
**Purpose**: Main application component with routing and authentication logic
**Functionality**:
- Firebase authentication state management
- Route protection and redirection
- Loading state handling
- Global route configuration

**Key Features**:
- Monitors user authentication state
- Auto-redirects based on auth status
- Handles protected routes (`/browse`, `/login`)

---

### 🎭 AppLayout.jsx
**Purpose**: Layout wrapper for landing page
**Functionality**:
- Provides consistent layout structure
- Contains background and header
- Routes to Body and Login components

---

### 🏠 Body.jsx
**Purpose**: Landing page content
**Functionality**:
- Hero section with call-to-action
- Navigation to login/signup
- Marketing content display

---

### 🔐 LoginPage.jsx
**Purpose**: User authentication interface
**Functionality**:
- User registration and login
- Form validation
- Firebase authentication integration
- Error handling and user feedback

**Key Features**:
- Toggle between Sign In/Sign Up
- Real-time validation
- Firebase user creation/login
- Remember me functionality
- Responsive form design

---

### 🎬 BrowsePage.jsx
**Purpose**: Main authenticated user interface
**Functionality**:
- Toggles between normal browsing and GPT search
- Manages movie data fetching
- Coordinates main and secondary containers

**Key Features**:
- GPT search view toggle
- Movie data orchestration
- Conditional rendering based on search mode

---

### 🎯 Header.jsx
**Purpose**: Navigation and user controls
**Functionality**:
- User authentication status display
- Language selection
- GPT search toggle
- User logout functionality

**Key Features**:
- Responsive navigation
- Multi-language support (English, Spanish, Hindi)
- User avatar display
- Sign out/Sign in buttons

---

### 🎥 MainBrowseContainer.jsx
**Purpose**: Hero section with featured movie
**Functionality**:
- Random movie selection from now-playing
- Video background integration
- Title and description overlay

**Key Features**:
- Dynamic movie selection
- Video trailer background
- Responsive title positioning

---

### 📹 VideoBackground.jsx
**Purpose**: YouTube trailer background player
**Functionality**:
- Fetches movie trailers from TMDB
- Embeds YouTube videos
- Autoplay and loop functionality

**Key Features**:
- TMDB API integration
- YouTube embed with custom parameters
- Muted autoplay
- Full-screen coverage

---

### 📝 VideoTitle.jsx
**Purpose**: Movie information overlay
**Functionality**:
- Displays movie title and description
- Action buttons (Play, More Info)
- Responsive text sizing

**Key Features**:
- Gradient overlay for readability
- Responsive typography
- Interactive buttons
- Text truncation for long descriptions

---

### 🎬 SecondaryBrowseContainer.jsx
**Purpose**: Movie categories display
**Functionality**:
- Multiple movie category lists
- Horizontal scrolling containers
- Movie data organization

**Categories Displayed**:
- Now Playing
- Popular
- Top Rated
- Upcoming
- Horror
- Action
- Comedy

---

### 📽 MovieList.jsx
**Purpose**: Individual movie category display
**Functionality**:
- Horizontal scrollable movie cards
- Category title and "See All" button
- Loading state handling

**Key Features**:
- Horizontal scrolling with hidden scrollbar
- Responsive card sizing
- Category navigation
- Loading state management

---

### 🎞️ MovieCard.jsx
**Purpose**: Individual movie display component
**Functionality**:
- Movie poster display
- Hover effects and animations
- Click interactions

**Key Features**:
- Responsive image sizing
- Hover scale effects
- TMDB image integration
- Click handlers for movie details

---

### 🔍 GPTSearchPage.jsx
**Purpose**: AI-powered movie search interface
**Functionality**:
- Full-screen search experience
- Background image with overlay
- Search bar and results integration

**Key Features**:
- Immersive search experience
- Scrolling results container
- Fixed background with parallax effect
- Responsive search layout

---

### 🤖 GPTSearchBar.jsx
**Purpose**: AI search input interface
**Functionality**:
- User query input
- OpenAI API integration
- Movie search orchestration

**Key Features**:
- Multi-language placeholder support
- Real-time search processing
- TMDB movie lookup
- Loading states and error handling

**Search Process**:
1. User enters search query
2. Sends to OpenAI GPT for movie recommendations
3. Receives 5 movie names as response
4. Searches TMDB for each movie
5. Dispatches results to Redux store

---

### 🎬 GPTMoviesSuggestion.jsx
**Purpose**: Display AI-recommended movies
**Functionality**:
- Renders movie lists for each recommendation
- Integrates with MovieList component
- Handles empty states

**Key Features**:
- Dynamic movie list generation
- Integration with search results
- Responsive layout

---

### ⚠️ Error.jsx
**Purpose**: Error boundary and error display
**Functionality**:
- Error state display
- Navigation options
- User-friendly error messages

---

## 🎣 Custom Hooks

### 🎬 useNowPlayingMovies.js
**Purpose**: Fetch now-playing movies from TMDB
**Functionality**:
- API data fetching
- Redux state management
- Error handling

### 🔥 usePopularMovies.js
**Purpose**: Fetch popular movies from TMDB
**Functionality**:
- Popular movies data fetching
- State management integration

### 📹 useGetMovieTrailer.js
**Purpose**: Fetch movie trailers
**Functionality**:
- Trailer video lookup
- YouTube key extraction
- State management

---

## 🗂️ Utils & State Management

### 🏪 appStore.js
**Purpose**: Redux store configuration
**Functionality**:
- Centralized state management
- Middleware configuration
- Slice combination

### 👤 userSlice.js
**Purpose**: User authentication state
**Functionality**:
- User data management
- Auth state tracking
- User add/remove actions

### 🎬 moviesSlice.js
**Purpose**: Movie data state management
**Functionality**:
- Movie collections storage
- Trailer video management
- API response handling

### 🤖 gptSlice.js
**Purpose**: GPT search state management
**Functionality**:
- Search results storage
- Search view toggle
- Movie recommendations state

### ⚙️ appConfigSlice.js
**Purpose**: Application configuration
**Functionality**:
- Language preferences
- UI state management
- Configuration actions

### 🔥 firebase.js
**Purpose**: Firebase configuration
**Functionality**:
- Firebase app initialization
- Authentication exports
- Service configuration

### 🌐 openAI.js
**Purpose**: OpenAI API integration
**Functionality**:
- API client configuration
- Request/response handling
- Error management

### 🗣️ langConstants.js
**Purpose**: Multi-language support
**Functionality**:
- Translation strings
- Language-specific content
- UI text management

### ✅ validate.js
**Purpose**: Form validation utilities
**Functionality**:
- Email validation
- Password validation
- Error message generation

### 📊 constants.js
**Purpose**: Application constants
**Functionality**:
- API endpoints and keys
- Image URLs
- Configuration values

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase account
- TMDB API key
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflixgpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root
   VITE_TMDB_KEY=your_tmdb_api_key
   VITE_GPT_API_KEY=your_openai_api_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_TMDB_KEY=your_tmdb_api_key_here
VITE_GPT_API_KEY=your_openai_api_key_here
```

---

## 🔧 Configuration

### Firebase Setup
1. Create Firebase project
2. Enable Authentication (Email/Password)
3. Configure web app
4. Update firebase.js with your config

### TMDB API Setup
1. Create account at [themoviedb.org](https://themoviedb.org)
2. Get API key
3. Add to environment variables

### OpenAI Setup
1. Create account at [OpenAI](https://openai.com)
2. Get API key
3. Add to environment variables

---

## 🎯 How It Works

### Authentication Flow
1. User visits landing page
2. Clicks login/signup
3. Enters credentials
4. Firebase authenticates
5. Redirected to browse page

### Movie Browsing
1. User lands on browse page
2. Now playing and popular movies load
3. User can scroll through categories
4. Click movies for details

### GPT Search Flow
1. User toggles GPT search
2. Enters movie preference query
3. OpenAI processes request
4. Returns 5 movie recommendations
5. TMDB provides movie details
6. Results display in scrollable lists

---

## 🎨 Styling & Design

### Responsive Design
- **Mobile (xs)**: 320px - 639px
- **Tablet (sm)**: 640px - 767px  
- **Laptop (md)**: 768px - 1023px
- **Desktop (lg)**: 1024px - 1279px
- **Large (xl)**: 1280px+

### Design System
- **Colors**: Netflix-inspired dark theme
- **Typography**: Responsive font scaling
- **Animations**: Smooth transitions and hover effects
- **Layout**: Flexbox and Grid-based

---

## 🐛 Troubleshooting

### Common Issues

**Movies not loading**:
- Check TMDB API key
- Verify network connection
- Check browser console for errors

**GPT search not working**:
- Verify OpenAI API key
- Check API quota limits
- Review OpenAI configuration

**Authentication issues**:
- Verify Firebase configuration
- Check email/password format
- Review Firebase console settings

**Build errors**:
- Clear node_modules and reinstall
- Check Node.js version compatibility
- Verify all environment variables

---

## 📝 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration for consistency
- React hooks best practices
- Tailwind CSS utility classes
- Functional components with hooks

---

## 🚀 Deployment

### Build Process
1. Run `npm run build`
2. Deploy `dist` folder to hosting
3. Configure environment variables
4. Test all functionality

### Hosting Options
- **Vercel** - Recommended for React apps
- **Netlify** - Static site hosting
- **Firebase Hosting** - Integrated with Firebase
- **AWS S3** - Custom hosting solution

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Follow code style guidelines

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 🙏 Acknowledgments

- **TMDB** - For movie data and API
- **OpenAI** - For GPT technology
- **Firebase** - For authentication services
- **Netflix** - For design inspiration
- **Tailwind CSS** - For utility-first CSS framework

---

## 📞 Support

For questions, issues, or contributions:
- Create an issue in the repository
- Review existing documentation
- Check troubleshooting section

**Happy Coding! 🎬🚀**
