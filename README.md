#  React Movie Labs – TMDB Movie Web Application

##  Overview
This project is a **React-based Movie Web Application** built for the *Web Application Development (WAD)* module.  
It integrates the **TMDB API** to fetch and display movie data dynamically, using **React Router**, **React Query**, and **Material UI** for a modern, responsive user interface.

---

##  Technologies Used
- **Frontend:** React + Vite  
- **UI Library:** Material UI   
- **Data Fetching:** React Query (`@tanstack/react-query`)  
- **Routing:** React Router 
- **API Source:** The Movie Database (TMDB) API  
- **State Management:** React Context  

---

## Progress Log

### Day 1 – Initial Setup & Static Endpoints
- Initialized React + Vite project and created base routing structure  
- Added `/popular`, `/top_rated`, and `/now_playing` static pages using TMDB endpoints  
- Implemented navigation across routes and verified API responses  
- Added **Recommendations** section under each movie detail page (`/movie/:id/recommendations`)  
- Verified functionality with valid TMDB API key and error handling

 *Result:* Completed baseline pages and recommendation feature

---

### Day 2 – Cast & Person Integration
- Implemented `/movie/:id/credits` endpoint to fetch and display cast list  
- Created `/person/:id` route for actor details, showing name, bio, and profile image  
- Linked **movie ↔ actor** pages using React Router navigation  
- Built `TemplatePersonPage` layout (avatar left, biography + movie list right)  
- Added `PersonMovieList` with consistent 4-card-per-row layout, equal height, and responsive scaling  

 *Result:* Person Detail Page and bidirectional linking completed successfully

---

### Day 3 – Filtering, Must Watch & Pagination Integration
- Enhanced `FilterMoviesCard` with a new **Release Year** filter (1990s / 2000s / 2010s / 2020s)  
- Updated `MovieListPageTemplate` to support combined filtering by **name + genre + year**  
- Added **Must Watch Page** (`/movies/mustWatch`) with context-based add/remove functionality  
- Integrated `AddToWatchlistIcon` and `RemoveFromMustWatchIcon` to manage must-watch state via `MoviesContext`  
- Unified all movie list pages (Home, Popular, Top Rated, Now Playing, Upcoming) under a single reusable `MoviePaginationPage` component  
- Modified `getMovies` API to accept `{ category, page }` parameters, enabling dynamic pagination for all TMDB list endpoints  
- Implemented **Pagination** using MUI’s `<Pagination>` component and React Query’s `keepPreviousData` for smooth page transitions  
- Extended **Search Results Page** with TMDB `/search/multi` API and full pagination support for a consistent browsing experience  

*Result:* Search, filtering, and pagination now standardized across all list pages;  
context-based Must Watch feature fully integrated and functional.

---

### Day 4 – UI Polish & MUI Enhancements
- Replaced `<Spinner>` in `MoviePaginationPage.jsx` with **MUI `<Skeleton>`** placeholders for smoother loading UX  
- Implemented responsive loading grid using `Grid` + `Skeleton` to simulate movie cards during fetch  
- Updated `MovieCard.jsx` to include **MUI `<Rating>`** and `<Stack>` for visual star-based rating (`vote_average / 2`) alongside numeric value  

*Result:* Combined **Pagination + Skeleton + Rating** provides a polished, modern Material Design experience  
across all list and detail pages.

---


##  Key Links
- **GitLab Repository:** [https://github.com/musicheng520/react-movie-assignment](https://github.com/musicheng520/react-movie-assignment)  


---

## Assignment Deliverables

This submission includes:

- **Functional React Movie Web App** integrating TMDB API with full CRUD-style features:  
  Favourites, Must Watch, Search, Year Filter, Pagination, and UI polish (Skeleton + Rating).  
- **Comprehensive README** documenting daily development progress (Day 1–4).  
- **Self-Assessment Excel Sheet** submitted separately via Moodle.  
- **Demo Video** (YouTube) demonstrating key functionality, navigation, and design choices.  

