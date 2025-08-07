# MongoDB Express API

A simple RESTful API built with Express and MongoDB for user authentication and management.

## Features

- User signup and login with JWT authentication
- Protected routes using middleware
- User CRUD operations
- Password hashing with bcrypt

## Project Structure

```
.env
app.js
package.json
config/
  db.js
controllers/
  authController.js
  userController.js
middlewares/
  authMiddleware.js
models/
  User.js
routes/
  authRoutes.js
  userRoutes.js
```

## Setup

1. **Clone the repository**
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure environment variables**
   - Edit `.env` with your MongoDB URI and JWT secret.

4. **Start the server**
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

## API Endpoints

- `POST /api/signup` — Register a new user
- `POST /api/login` — Login and receive JWT
- `GET /api/profile` — Get authenticated user profile (protected)
- `POST /users` — Create user
- `GET /users` — List users
