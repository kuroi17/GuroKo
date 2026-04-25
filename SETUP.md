# 🚀 Hackathon Web App - Full Stack Setup Guide

## 📋 Project Overview

A production-ready **Hackathon starter template** built with:

### Frontend Stack

- **React** (JavaScript only - no TypeScript)
- **TailwindCSS** for styling
- **Supabase Client SDK** for database & auth
- **Axios** for API requests

### Backend Stack

- **Node.js** with **Express.js**
- **Gemini AI API** (@google/generative-ai) - **Backend only, never expose key in frontend**
- **CORS middleware** for secure frontend-backend communication
- **Supabase Service Role Key** for server-side operations
- **dotenv** for environment variable management

### Database & Auth

- **Supabase** for PostgreSQL database and authentication

---

## 📁 Project Structure

```
GuroKo-1/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── utils/
│   │   │   ├── supabaseClient.js    # Supabase instance
│   │   │   ├── apiClient.js         # API calls to backend
│   │   ├── App.js            # Main app component
│   │   ├── App.css           # Tailwind + custom styles
│   │   ├── index.js          # React entry point
│   │   ├── index.css         # Global Tailwind styles
│   ├── .env                  # Frontend env vars (local)
│   ├── .env.example          # Template for .env
│   ├── package.json          # Frontend dependencies
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── postcss.config.js     # PostCSS plugins
│
├── backend/
│   ├── config/
│   │   ├── env.js            # Environment variable validation
│   ├── routes/
│   │   ├── geminiRoutes.js   # API route definitions
│   ├── controllers/
│   │   ├── geminiController.js # Request handlers
│   ├── services/
│   │   ├── geminiService.js  # Gemini AI service (SECURE)
│   ├── index.js              # Express server entry point
│   ├── .env                  # Backend env vars (local)
│   ├── .env.example          # Template for .env
│   ├── package.json          # Backend dependencies
│
├── .env                      # Root env (project-wide secrets)
├── .gitignore                # Git ignore rules (includes .env files)
├── README.md                 # This file
```

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **Git**
- **Supabase account** (for database & auth)
- **Google Gemini API key** (for AI features)

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd GuroKo-1
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

**Installed Packages:**

- `react` - UI library
- `react-dom` - React DOM rendering
- `react-scripts` - Build scripts (Create React App)
- `@supabase/supabase-js` - Supabase database client
- `axios` - HTTP requests
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

### Step 3: Install Backend Dependencies

```bash
cd ../backend
npm install
```

**Installed Packages:**

- `express` - Web framework
- `cors` - CORS middleware
- `dotenv` - Environment variable loader
- `axios` - HTTP requests (for internal API calls)
- `@google/generative-ai` - Gemini AI SDK
- `@supabase/supabase-js` - Supabase service client
- `nodemon` - Dev server auto-reload

---

## 🔐 Environment Variables Setup

### Frontend (.env)

Create `/frontend/.env` with:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_API_URL=http://localhost:5000
```

**Get these values from:**

- Supabase Dashboard → Settings → API Keys
- Use the **Anon Key** (safe for frontend)

### Backend (.env)

Create `/backend/.env` with:

```env
GEMINI_API_KEY=your_gemini_api_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_URL=your_supabase_url
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**Get these values from:**

- Gemini API: https://ai.google.dev/ → Get API Key
- Supabase: Dashboard → Settings → API Keys → Service Role Key
- **⚠️ IMPORTANT: Service Role Key must NEVER be exposed in frontend!**

### Root .env (Already Configured)

The `.env` file at the root contains Supabase credentials and is already configured for the project.

**⚠️ SECURITY NOTE:**

- `.env` files are listed in `.gitignore` and will NOT be committed
- Never commit API keys or secrets to Git
- Share `.env.example` templates with teammates instead

---

## 🚀 Running the Application

### Option 1: Run Both Frontend & Backend Separately (Recommended for Development)

**Terminal 1 - Frontend:**

```bash
cd frontend
npm start
```

- Runs on `http://localhost:3000`
- Auto-reloads on code changes

**Terminal 2 - Backend:**

```bash
cd backend
npm run dev
```

- Runs on `http://localhost:5000`
- Uses nodemon for auto-reload
- Endpoints:
  - `GET /health` - Health check
  - `POST /api/gemini` - Send prompt to Gemini AI

### Option 2: Run Backend Only

```bash
cd backend
npm start
```

- Runs without auto-reload

---

## 📡 API Endpoints

### Health Check

```bash
GET http://localhost:5000/health
```

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2026-04-25T10:30:00.000Z",
  "environment": "development"
}
```

### Gemini AI Endpoint

```bash
POST http://localhost:5000/api/gemini
Content-Type: application/json

{
  "prompt": "What is the capital of France?"
}
```

**Response (Success):**

```json
{
  "success": true,
  "response": "The capital of France is Paris...",
  "timestamp": "2026-04-25T10:30:00.000Z"
}
```

**Response (Error):**

```json
{
  "success": false,
  "error": "Error message",
  "timestamp": "2026-04-25T10:30:00.000Z"
}
```

### Frontend to Backend Communication

The frontend uses `apiClient.js` to call the backend:

```javascript
import { sendPromptToGemini } from "./utils/apiClient";

const result = await sendPromptToGemini("Your prompt here");
```

---

## 🔄 CORS Configuration

CORS is configured in `backend/index.js`:

```javascript
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
```

This allows the frontend to safely communicate with the backend.

---

## 🛡️ Security Best Practices

1. **Gemini API Key**: Only used on backend, never exposed to frontend
2. **Service Role Key**: Sensitive - keep only in backend `.env`
3. **Anon Key**: Safe for frontend (limited permissions)
4. **CORS**: Restricts API access to frontend URL
5. **Environment Variables**: All secrets in `.env` (git-ignored)
6. **Error Handling**: Sensitive errors not exposed to frontend

---

## 📝 Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

- Creates optimized production bundle in `frontend/build/`
- Deploy to Vercel, Netlify, or any static host

### Backend Deployment

```bash
# In backend/.env, change:
NODE_ENV=production
PORT=5000  # or your production port

# Run production server:
npm start
```

- Deploy to Heroku, AWS, DigitalOcean, Render, etc.

---

## 🧪 Testing

### Test Backend Health Check

```bash
curl http://localhost:5000/health
```

### Test Gemini API

```bash
curl -X POST http://localhost:5000/api/gemini \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Hello Gemini"}'
```

### Test Frontend-Backend Integration

- Go to `http://localhost:3000`
- Enter a prompt in the textarea
- Click "Send to Gemini"
- See the AI response appear

---

## 📚 Supabase Integration

### For Authentication

```javascript
import { supabase } from "./utils/supabaseClient";

// Sign up
await supabase.auth.signUp({ email, password });

// Sign in
await supabase.auth.signInWithPassword({ email, password });

// Sign out
await supabase.auth.signOut();
```

### For Database (CRUD)

```javascript
// Read
const { data, error } = await supabase.from("table_name").select("*");

// Create
await supabase.from("table_name").insert([{ col1: "value" }]);

// Update
await supabase.from("table_name").update({ col1: "new_value" }).eq("id", 1);

// Delete
await supabase.from("table_name").delete().eq("id", 1);
```

---

## 🐛 Troubleshooting

### Frontend won't start

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

### Backend crashes on startup

```bash
# Check .env file is in backend/ directory
# Verify GEMINI_API_KEY and SUPABASE_SERVICE_ROLE_KEY are set
# Check PORT 5000 is not already in use
```

### CORS errors

- Ensure `FRONTEND_URL` in backend `.env` matches frontend URL
- Default is `http://localhost:3000`

### Can't connect to Supabase

- Verify `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY` are correct
- Check Supabase project is active

---

## 📦 Deployment Checklist

- [ ] All `.env.example` files committed, `.env` files ignored
- [ ] Frontend build tested (`npm run build`)
- [ ] Backend tested in production mode (`NODE_ENV=production`)
- [ ] CORS origin updated to production frontend URL
- [ ] API keys validated for production environment
- [ ] Error logging configured (optional)
- [ ] Database migrations run on Supabase
- [ ] Frontend deployed (Vercel/Netlify)
- [ ] Backend deployed (Heroku/AWS/DigitalOcean)

---

## 📞 Support & Resources

- **React Docs**: https://react.dev
- **TailwindCSS Docs**: https://tailwindcss.com
- **Supabase Docs**: https://supabase.com/docs
- **Google Gemini API**: https://ai.google.dev
- **Express Docs**: https://expressjs.com

---

## 📄 License

This hackathon starter is open source and available under the MIT License.

---

**Happy Hacking! 🎉**

Questions? Create an issue or reach out to the team.
