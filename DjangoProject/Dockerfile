FROM python:3.8

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app
RUN pip install -r requirements.txt

# Copy project files
COPY . /app

# Set the entry point for the container
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
