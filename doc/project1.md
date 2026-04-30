git url - https://github.com/kiranvinzoda4/ai_tasks

🤖 AI File Analysis System

    Upload documents, ask questions, get intelligent answers powered by AI

A modern web application that allows users to upload documents (PDF, images) and interact with them through an AI-powered chat interface. Built with FastAPI, Next.js, and ChromaDB for intelligent document analysis.
📸 Application Flow
1. Welcome Page

Welcome Page Modern landing page with gradient design and feature highlights
2. User Registration

Registration Clean registration form with step-by-step process
3. Email Verification

OTP Verification Secure OTP verification via email
4. Login

Login Secure login with modern UI design
5. Dashboard

Main Dashboard Main workspace with document management and AI chat
6. File Upload

File Upload Drag & drop file upload with support for multiple formats
7. AI Chat Interface

Chat Interface Interactive chat with AI about your uploaded documents
🚀 Features

    📄 Document Upload - Support for PDF, JPG, PNG, BMP files
    🤖 AI Chat - Ask questions about your documents and get intelligent responses
    💬 Chat History - Persistent conversation history stored in database
    🔐 Secure Authentication - JWT-based auth with email OTP verification
    📱 Responsive Design - Modern UI that works on all devices
    🔍 Vector Search - ChromaDB integration for semantic document search
    ⚡ Real-time Updates - Live chat interface with auto-scroll

🛠️ Technologies Used
Backend

    FastAPI - Modern Python web framework
    MySQL - Primary database for user data and chat history
    ChromaDB - Vector database for document embeddings
    Sentence Transformers - Text embeddings (all-MiniLM-L6-v2 model)
    Ollama - Local LLM integration (phi3:mini model)
    PyPDF2 - PDF text extraction
    Tesseract OCR - Image text extraction (pytesseract)
    Pillow (PIL) - Image processing
    SQLAlchemy - ORM for database operations
    Alembic - Database migrations
    JWT - Secure authentication tokens
    Python 3.10+ - Core programming language

Frontend

    Next.js 14 - React framework with App Router
    TypeScript - Type-safe JavaScript
    Material-UI (MUI) - Modern React component library
    Tailwind CSS - Utility-first CSS framework
    Axios - HTTP client for API calls

Infrastructure

    Docker - Containerization (optional)
    Git - Version control
    Environment Variables - Configuration management

📋 Prerequisites

    Python 3.10+
    Node.js 18+
    MySQL Server
    Ollama (for AI model)
    Tesseract OCR (for image text extraction)
        Windows: Download from GitHub
        Linux: sudo apt install tesseract-ocr
        macOS: brew install tesseract

🔧 Installation & Setup
1. Clone Repository

git clone <your-repo-url>
cd ai_tasks

2. Backend Setup
Install Dependencies

cd backend
python3.10 -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt

Database Configuration

    Create MySQL database
    Copy .env.example to .env
    Configure environment variables:

DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_NAME=ai_file_analysis
JWT_KEY=your_jwt_secret_key

Generate JWT Key

python
>>> from jwcrypto import jwk
>>> key = jwk.JWK(generate='oct', size=256)
>>> key.export()
# Copy the output and use as JWT_KEY

Run Migrations

alembic upgrade head

Install Ollama & Model

# Install Ollama (visit https://ollama.ai)
curl -fsSL https://ollama.ai/install.sh | sh

# Pull the AI model
ollama pull phi3:mini

Install Tesseract OCR

# Windows: Download installer from GitHub
# Linux
sudo apt install tesseract-ocr

# macOS
brew install tesseract

Start Backend Server

uvicorn main:app --reload --host 127.0.0.1 --port 8001

3. Frontend Setup

cd frontend
npm install
npm run dev

4. Access Application

    Frontend: http://localhost:3000
    Backend API: http://localhost:8001
    API Docs: http://localhost:8001/docs

📚 API Endpoints
Authentication

    POST /auth/register - User registration
    POST /auth/verify-otp - Email verification
    POST /auth/login - User login

Documents

    POST /documents/upload - Upload document
    GET /documents/list - List user documents
    DELETE /documents/{id} - Delete document

Chat

    POST /chat/ask - Ask question about documents
    GET /chat/history - Get chat history
    DELETE /chat/history - Clear chat history

User

    GET /user/profile - Get user profile

🔄 Database Migrations

# Create new migration
alembic revision --autogenerate -m "Description"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1

🤝 Contributing

    Fork the repository
    Create feature branch (git checkout -b feature/amazing-feature)
    Commit changes (git commit -m 'Add amazing feature')
    Push to branch (git push origin feature/amazing-feature)
    Open Pull Request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

    Ollama for local LLM integration
    ChromaDB for vector database capabilities
    Material-UI for beautiful React components
    FastAPI for the excellent Python web framework

About
No description, website, or topics provided.
Resources
Readme
Activity
Stars
0 stars
Watchers
0 watching
Forks
0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors 1

    @kiranvinzoda4
    kiranvinzoda4

Languages

    TypeScript 58.5%
    Python 38.9%
    CSS 1.4%
    Other 1.2% 

Suggested workflows
Based on your tech stack

    Django logo
    Django
    Build and Test a Django Project
    Deno logo
    Deno
    Test your Deno project
    Python package logo
    Python package
    Create and test a Python package on multiple Python versions.

More workflows
Footer
© 2026 GitHub, Inc.
Footer navigation

    Terms
    Priv