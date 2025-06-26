# Travel Service

This microservice provides travel planning functionalities using FastAPI.

## Setup

### 1. Prepare GenAI API

Create a `.env` file in the project root with the following variables:
You need an API_KEY from [Google AI-Studio](https://aistudio.google.com/u/1/apikey)

```env
GENAI_API_KEY=your_api_key_here
```

### 2. Create a Virtual Environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```


### 4. Start the FastAPI Server

```bash
fastapi dev main.py
```

The server will start in development mode. Access the API docs at `http://localhost:8000/docs`.