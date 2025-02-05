# JWT Authentication & Role-Based Access Control (RBAC) API

## Overview
This is a **JWT-based Authentication API** with **Role-Based Access Control (RBAC)** built using **Node.js, Express.js, and MongoDB**. The API allows users to register, log in, and access protected routes based on their roles (**Admin, Shipper, Carrier**). It follows best security practices, including:
- Password hashing using `bcryptjs`
- Token-based authentication with `jsonwebtoken`
- Secure headers with `helmet`
- Logging with `morgan`

## Features
- User Registration
- User Login with JWT authentication
- Role-Based Access Control (RBAC)
- Secure API with authentication and authorization middleware

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Security**: JWT, bcryptjs, helmet, CORS
- **Logging**: morgan, winston

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Run
1. **Clone the repository**
   ```sh
   git clone https://github.com/Akintola-Stephen/RBAC.git
   cd RBAC
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Create a `.env` file in the root directory**
   ```ini
   MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/auth_rbac
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. **Run the server**
   ```sh
   npm start
   ```
   The API will start on `http://localhost:5000`.

---

## API Endpoints

### 1. User Registration
**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "username": "Stephen",
  "email": "sakintola351@gmail.com",
  "password": "123456",
  "role": "Admin"
}
```

**Response:**
```json
{
  "message": "Stephen you've been successfully registered",
  "data": {
    "name": "Stephen2",
    "email": "sakintola3511@gmail.com",
    "role": "Admin"
  },
  "status": true
}
```

### 2. User Login
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "sakintola351@gmail.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "message": "Stephen you've been successfully logged In",
  "data": {
    "name": "Stephen",
    "email": "sakintola351@gmail.com",
    "role": "Admin"
  },
  "token": "your_jwt_token_here",
  "status": true
}
```

### 3. Access Protected Routes
Use the **JWT token** from login to access protected endpoints.

#### a. Admin Route
**Endpoint:** `GET /api/protected/admin`

**Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```

**Response (if user is an Admin):**
```json
{
  "message": "Welcome Admin!"
}
```

**Response (if unauthorized):**
```json
{
  "message": "Forbidden"
}
```

#### b. Shipper Route
**Endpoint:** `GET /api/protected/shipper`

**Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```

**Response (if user is a Shipper):**
```json
{
  "message": "Welcome Shipper!"
}
```

#### c. Carrier Route
**Endpoint:** `GET /api/protected/carrier`

**Headers:**
```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```

**Response (if user is a Carrier):**
```json
{
  "message": "Welcome Carrier!"
}
```

---

## Testing the API
### Using Postman
1. **Register a user** → `POST /api/auth/register`
2. **Login user** → `POST /api/auth/login`
3. **Copy the token** from the response.
4. **Access protected routes** with the token in the `Authorization` header.

### Using Curl
```sh
curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email": "sakintola351@gmail.com", "password": "123456"}'
```

---

## Security Best Practices Implemented
- **Password Hashing** → `bcryptjs`
- **JWT Authentication** → `jsonwebtoken`
- **Role-Based Access Control (RBAC)**
- **Secure Headers** → `helmet`
- **CORS Protection** → `cors`

---

## Future Improvements
- Refresh Token Implementation
- Password Reset Functionality
- Two-Factor Authentication (2FA)

---


