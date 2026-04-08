# 🏭 Shop Floor Management System (MERN Stack)

A full-stack **Shop Floor Management System** built using the **MERN Stack (MongoDB, Express, React, Node.js)** to manage production, manpower, machines, and quality in real-time.

Designed for **CNC shop floors**, this system helps track daily production, monitor machine status, and reduce rejection through better data visibility.

---

## 🚀 Features

### 📊 Production Management

* Daily production entry (machine-wise)
* Target vs actual comparison
* Shift-wise tracking

### 👷 Manpower Planning

* Machine-wise manpower allocation
* Attendance confirmation
* Operator tracking

### ⚙️ Machine Monitoring

* Status: Running / Idle / Breakdown
* Downtime recording
* Machine utilization tracking

### 📉 Quality & Rejection

* Rejection entry with reason
* Root Cause Analysis (RCA) support
* Inspection tracking

### 📈 Dashboard

* Real-time data visualization
* KPIs: Production %, Rejection %, OEE
* Summary charts

---

## 🛠️ MERN Tech Stack

### Frontend

* ⚛️ React.js
* Axios (API calls)
* React Router DOM

### Backend

* 🟢 Node.js
* 🚏 Express.js

### Database

* 🍃 MongoDB (Mongoose ODM)

### Dev Tools

* Nodemon
* dotenv
* ESLint / Prettier

---

## 📂 Folder Structure

```bash
shop-floor-management/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Pages (Dashboard, Production, etc.)
│   │   ├── services/       # API calls
│   │   └── App.js
│
├── server/                 # Backend
│   ├── controllers/        # Business logic
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Auth / error handling
│   └── server.js
│
├── config/                 # DB connection
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/shop-floor-management.git
cd shop-floor-management
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd server
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

### 4️⃣ Environment Variables

Create `.env` inside **server/** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 5️⃣ Run Application

#### Start Backend

```bash
cd server
npm run dev
```

#### Start Frontend

```bash
cd client
npm start
```

---

## 🔗 API Endpoints

### 📌 Production

* `GET /api/production` → Get all production data
* `POST /api/production` → Add production entry

### 📌 Machines

* `GET /api/machines` → Get machine list
* `POST /api/machines` → Add machine

### 📌 Manpower

* `GET /api/manpower` → Get manpower status
* `POST /api/manpower` → Assign manpower

### 📌 Quality

* `POST /api/rejection` → Add rejection data

## 🤝 Contribution

1. Fork the repository
2. Create your branch (`feature/new-feature`)
3. Commit changes
4. Push and create Pull Request

---

## 👨‍💻 Author

**Saurabh**
Assistant Manager
Lohia Corp Ltd

---

## ⭐ Support

If you found this useful, don’t forget to ⭐ the repo!

---

### 👍 If you want next:

I can help you with:

* Full **MERN project starter code**
* **Database schema (machines, production, rejection)**
* **Dashboard UI design**
* **OEE calculation logic (important for your role)**

Just tell me 👍
