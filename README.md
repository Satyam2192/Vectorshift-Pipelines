# Pipeline Builder Project

This project consists of a React frontend for building pipelines and a FastAPI backend for analyzing the pipelines.

## Prerequisites

- Node.js (v14 or later)
- Python (v3.7 or later)
- npm or yarn

## Setup

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required packages:
   ```
   pip install fastapi uvicorn pydantic
   ```

5. Start the backend server:
   ```
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

The backend should now be running on `http://127.0.0.1:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```
   or with yarn:
   ```
   yarn start
   ```

The frontend should now be running on `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the drag-and-drop interface to create your pipeline.
3. Click the "Submit" button to send the pipeline to the backend for analysis.
