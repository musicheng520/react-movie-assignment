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

##  Key Links
- **GitLab Repository:** [https://github.com/musicheng520/react-movie-assignment](https://github.com/musicheng520/react-movie-assignment)  


---

## Assignment Deliverables


