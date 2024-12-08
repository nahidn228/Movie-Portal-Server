# Movie Portal - Server-Side Documentation 🎬

This is the server-side implementation of the **Movie Portal** project. The backend is built using **Node.js** and **Express.js** and uses **MongoDB** as the database. This server handles data operations, API requests, and user interactions for the Movie Portal.

---

## 🚀 Features

### API Endpoints:
1. **Movies**
   - Add, retrieve, update, and delete movies from the database.
   - Get featured or latest-release movies dynamically.

2. **Favorite Movies**
   - Manage user-specific favorite movies.
   - Add, retrieve, delete, and filter favorite movies by user email.

3. **Upcoming Movies**
   - Retrieve and display a list of upcoming movies.

### Secure Database Connection:
- Environment variables are used to secure MongoDB credentials.

### Middleware:
- **CORS**: Allows cross-origin requests for frontend communication.
- **JSON Parsing**: Parses incoming request payloads as JSON.

---

## 🛠️ Tech Stack

### Backend:
- **Node.js**
- **Express.js**

### Database:
- **MongoDB Atlas**

### Middleware:
- **Cors**
- **Dotenv**

### Other Libraries:
- **MongoDB Driver**: For database interaction.

---

## 📁 API Endpoints

### Base URL
`https://full-stack-go.vercel.app` .

### Movies Endpoints
1. **Add a Movie**  
   `POST /movies`  
   - Adds a new movie to the database.
   - **Body**: Movie details as JSON (e.g., title, genre, releaseYear, etc.).

2. **Get All Movies**  
   `GET /movies`  
   - Retrieves all movies.

3. **Get a Single Movie**  
   `GET /movies/:id`  
   - Retrieves movie details by ID.

4. **Update a Movie**  
   `PUT /movies/:id`  
   - Updates an existing movie.
   - **Body**: Updated movie details as JSON.

5. **Delete a Movie**  
   `DELETE /movies/:id`  
   - Deletes a movie by ID.

6. **Get Featured Movies**  
   `GET /featuredMovies`  
   - Retrieves the top 6 highest-rated movies.

7. **Get Latest Releases**  
   `GET /latestRelease`  
   - Retrieves the 6 most recent movie releases.

---

### Favorite Movies Endpoints
1. **Add a Favorite Movie**  
   `POST /favorite-movies`  
   - Adds a movie to the user's favorites list.
   - **Body**: Favorite movie details as JSON (e.g., userEmail, movieID, etc.).

2. **Get All Favorite Movies**  
   `GET /favorite-movies`  
   - Retrieves all favorite movies.

3. **Get Favorite Movies by Email**  
   `GET /favorite-movies/:email`  
   - Retrieves favorite movies of a specific user based on their email.

4. **Delete a Favorite Movie**  
   `DELETE /favorite-movies/:id`  
   - Deletes a favorite movie by ID.

---

### Upcoming Movies Endpoint
1. **Get Upcoming Movies**  
   `GET /UpcomingMovie`  
   - Retrieves a list of upcoming movies.

---

## 🛡️ Environment Variables

To secure sensitive data, the following environment variables are required in a `.env` file:

```plaintext
DB_USER=<MongoDB Username>
DB_PASS=<MongoDB Password>
PORT=<Server Port, e.g., 5000>
