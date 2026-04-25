# 🎓 GuroKo - AI-Powered Learning Platform

Welcome to **GuroKo**! This is a full-stack application designed to help users learn more effectively using AI.

## 🚀 Quick Start for Teammates

If you just cloned this repo, follow these steps to get everything running:

### 1. Install Dependencies
In the root directory, run:
```bash
npm install
npm run install:all
```
*Note: This will install dependencies for the root, frontend, and backend.*

### 2. Setup Environment Variables
You need to create `.env` files in both `frontend/` and `backend/` directories.
- Copy `frontend/.env.example` to `frontend/.env`
- Copy `backend/.env.example` to `backend/.env`
- Fill in the required API keys (Supabase and Gemini).

### 3. Run the Application
You can run both frontend and backend simultaneously from the root:
```bash
npm run dev
```
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000

---

## 📂 Project Structure

- `frontend/`: React + TailwindCSS application.
- `backend/`: Node.js + Express.js server (Gemini AI integration).
- `SETUP.md`: Detailed setup guide and API documentation.

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Supabase Client
- **Backend:** Node.js, Express, Google Gemini AI SDK
- **Database:** Supabase (PostgreSQL)

---

**Happy Coding! 🎉**