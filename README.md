# MERN Stack E-Commerce App

## 📌 Overview

This is a **full-stack E-Commerce application** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **JWT authentication**. It allows users to **register, log in, add products to cart, place orders**, and lets **admins manage products and orders**.

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Axios, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT Authentication
- **Authentication:** JSON Web Token (JWT) stored in cookies
- **State Management:** React Context API
- **Deployment:** Can be deployed on **Vercel** (frontend) & **Render/Heroku** (backend)

## ⚡ Features

✅ User Authentication (Login, Register, Logout)
✅ JWT-based Authentication with Cookies
✅ Add to Cart & Order Placement
✅ Admin Dashboard for Product & Order Management
✅ Protected Routes (User & Admin)
✅ Responsive UI with Tailwind CSS

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/yadu247/ecommerce-app.git
cd ecommerce-app
```

### **2️⃣ Install Dependencies**

```sh
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a **.env** file inside the **server** folder and add:

```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### **4️⃣ Run the Application**

```sh
# Start backend (server)
cd server
npm run dev

# Start frontend (React Vite)
cd ../client
npm run dev
```

The app will be available at **`http://localhost:5173`** (Frontend) and **`http://localhost:5000`** (Backend).

## ✅ Admin Credentials

To test **admin access**, manually set a user as admin in MongoDB:

1. Open **MongoDB Compass** or **MongoDB Atlas**
2. Navigate to the **users** collection
3. Find your user and update the role:

```json
{
  "email": "admin@example.com",
  "password": "hashed_password",
  "role": "admin"
}
```

## 🌍 Deployment

### **Frontend (Vercel)**

```sh
cd client
npm run build
vercel
```

### **Backend (Render/Heroku)**

```sh
cd server
git init
git add .
git commit -m "Deploy backend"
git push heroku main
```

## 📜 License

This project is licensed under the **MIT License**.
