# 📝 ToDo-SMIT-MERN

A simple, modern, and full-stack **To-Do List App** built using the **MERN stack (MongoDB, Express, React, Node.js)** as part of the **SMIT Web & Mobile App Development course**.

---

## 🚀 Features

✅ Add, update, and delete individual tasks  
✅ Delete all todos at once  
✅ Responsive and clean UI with React + CSS Modules  
✅ Font Awesome icons for buttons  
✅ MongoDB backend using Mongoose  
✅ RESTful API design (GET, POST, PUT, DELETE)  
✅ Organized project structure (frontend + backend)  

---

## 🏗️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React (Vite) + Module CSS + Axios |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Icons | Font Awesome CDN |

---

## 📁 Folder Structure

```
ToDo-SMIT-MERN/
│
├── backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.module.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/muddasirbutt3/ToDo-SMIT-MERN.git
cd ToDo-SMIT-MERN
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Then run:
```bash
npm start
```
_Server will start on_ **http://localhost:5000**

---

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
_Open your browser at_ **http://localhost:5173**

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `GET` | `/todo` | Get all todos |
| `POST` | `/todo` | Add a new todo |
| `PUT` | `/todo/:id` | Update a todo |
| `DELETE` | `/todo/:id` | Delete a single todo |
| `DELETE` | `/todo/deleteAll` | Delete all todos |

---

## 🧠 Learning Goals
This project was created to practice:
- Full-stack development using the **MERN stack**
- RESTful API structure
- CRUD operations with MongoDB
- State management in React
- Styling with Module CSS
- Connecting frontend and backend (CORS, Axios)

---

## 🖼️ Preview
*(You can add a screenshot or GIF here)*  
Example:  
```
![App Screenshot](./preview.png)
```

---

## 👨‍💻 Author
**Muddasir Butt**  
🎓 SMIT Web & Mobile App Development Student  
🔗 [GitHub Profile](https://github.com/muddasirbutt3)

---

## 📜 License
This project is open-source and free to use.
"# ToDo-MERN" 
