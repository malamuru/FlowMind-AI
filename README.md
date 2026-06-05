# FlowMind AI

AI-powered workflow intelligence platform that transforms messy business documents, meeting notes, and operational workflows into structured action plans, risks, automation opportunities, and operational insights.

## Live Demo

- Frontend: https://flowmind-ai-platform.vercel.app/
- Backend: https://flowmind-ai-backend.onrender.com

---

# Overview

FlowMind AI is a full-stack AI workflow automation platform designed to help businesses convert unstructured operational information into actionable insights.

The platform analyzes business documents, internal process notes, onboarding workflows, project updates, and meeting summaries using Large Language Models (LLMs) to extract:

* Executive summaries
* Action items
* Risks and blockers
* Workflow bottlenecks
* Missing operational information
* Automation opportunities
* Recommended next-step workflows

This project demonstrates practical AI system design focused on operational efficiency, business process automation, and intelligent workflow analysis.

---

# Key Features

## AI Workflow Analysis

- Analyze operational documents and convert them into structured workflow intelligence.

## Action Item Extraction

- Automatically identify tasks, responsibilities, and deadlines from business documents.

## Risk Detection

- Detect blockers, workflow gaps, delays, and operational risks.

## Automation Recommendations

- Generate AI-driven suggestions for workflow automation and operational improvements.

## PDF & TXT Document Support

- Upload and analyze PDF or TXT business documents directly.

## Production-Ready Full Stack Architecture

- Built with scalable frontend/backend separation and REST API architecture.

---

# Tech Stack

## Frontend

* React.js
* Vite
* Modern CSS
* PDF.js

## Backend

* Node.js
* Express.js
* REST APIs
* Helmet Security Middleware
* CORS
* Express Rate Limiting

## AI & NLP

* Groq API
* Llama 3.3 70B Versatile
* Prompt Engineering
* Structured AI Output Generation

## Deployment

* Frontend: Vercel
* Backend: Render

---

# Architecture

```text
User Uploads Document
        ↓
Frontend (React + Vite)
        ↓
REST API Request
        ↓
Backend (Node.js + Express)
        ↓
Groq LLM API
        ↓
AI Workflow Analysis
        ↓
Structured Business Insights
```

---

# Example Use Cases

* Operations workflow analysis
* Client onboarding optimization
* Meeting summary automation
* Internal process improvement
* Business workflow intelligence
* SOP analysis
* Team task extraction
* Operational risk identification

---

# Project Structure

```text
FlowMind-AI/
├── client/
│   ├── src/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/malamuru/FlowMind-AI.git
cd FlowMind-AI
```

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000
GROQ_API_KEY=your_groq_api_key
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm start
```

---

# Frontend Setup

Open new terminal:

```bash
cd client
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```
---

# Security Features

* Helmet middleware
* Rate limiting
* Environment variable protection
* CORS configuration
* Secure REST API handling

---

# Why This Project Matters

Most AI demos focus only on chat interfaces.

FlowMind AI focuses on operational intelligence, helping organizations convert messy workflows and scattered information into structured business decisions.

This project demonstrates:

* AI system integration
* Full-stack engineering
* Workflow automation
* Business process thinking
* Prompt engineering
* Production deployment
* Operational problem solving

---

# Author

## Mounika Alamuru

GitHub: https://github.com/malamuru

LinkedIn: https://www.linkedin.com/in/mounika-alamuru/

---
