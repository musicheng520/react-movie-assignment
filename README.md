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
- **GitHub Repository:** [https://github.com/musicheng520/react-movie-assignment](https://github.com/musicheng520/react-movie-assignment)  
- **YouTube Demo Video:** [https://www.youtube.com/watch?v=3rJidBESYXE](https://www.youtube.com/watch?v=3rJidBESYXE)

---

## Assignment Deliverables

This submission includes:

- **Functional React Movie Web App** integrating TMDB API with full CRUD-style features:  
  Favourites, Must Watch, Search, Year Filter, Pagination, and UI polish (Skeleton + Rating).  
- **Comprehensive README** documenting daily development progress (Day 1–4).  
- **Self-Assessment Excel Sheet** submitted separately via Moodle.  
- **Demo Video** (YouTube) demonstrating key functionality, navigation, and design choices.  


## AI Usage Declaration

I used ChatGPT during development mainly to help me understand some concepts and improve my code style,  
but all the main logic and implementation were written and tested by myself.  
Here’s how I used it in small ways:

1. **Pagination help:**  
   I wasn’t sure how to make a reusable pagination system at first,  
   so AI showed me an idea to move it into a shared `getMovies` API function and a common `MoviePaginationPage` component.

2. **Search feature idea:**  
   AI reminded me that TMDB has a `/search/multi` endpoint,  
   which made the search bar much easier to implement.

3. **UI suggestion:**  
   It suggested using Material UI’s `<Skeleton>` component instead of a spinner  
   to make the loading state look cleaner.

4. **Actor page layout fix:**  
   My actor page layout kept putting the movie list under the profile photo,  
   and AI helped me reorganize the JSX with nested MUI Grids to fix the alignment.

5. **Filtering logic tip:**  
   When I was writing the year filter, AI showed me a simpler way —  
   just using direct `if` checks inside the `.filter()` chain,  
   which made the code easier to read.

6. **Writing and formatting:**  
   AI helped me summarise each day’s progress and format this README neatly.

I made sure I understood everything and could explain every part of the code myself.

