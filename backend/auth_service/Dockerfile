FROM python:3

WORKDIR /code
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app /code/app

EXPOSE 80

CMD ["fastapi", "run", "app/main.py", "--port", "80"]