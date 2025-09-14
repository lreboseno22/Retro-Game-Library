# 🎮 Retro Game Library

A simple full-stack web application to manage a collection of retro video games.  

## Features

- View all games in a styled library
- Add new games through a form
- Edit existing games
- Delete games
- Filter games by **platform** or **year**
- User and review datasets (API endpoints available)


## Getting Started

#### 1. Clone the repository
#### 2. Install Dependencies
#### 3. Run the app


## Routes Overview

### Browser (Rendered Views)

- GET /library → View all games
- GET /add-game → Add game form
- GET /edit-game/:id → Edit game form

### API (JSON Endpoints)

 - GET /api/games → Get all games
 - GET /api/games/:id → Get single game
 - POST /api/games → Create new game
   
 - PUT /api/games/:id → Update game
 - DELETE /api/games/:id → Delete game
 - GET /api/reviews → Get all reviews
 
 - POST /api/reviews → Create review
 - PUT /api/reviews/:id → Update review
   
 - GET /api/users → Get all users
 - POST /api/users → Create user
