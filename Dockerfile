FROM python:3.12-alpine

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Instala as dependências necessárias
RUN apk update && apk add --no-cache \
    libpq-dev \
    gcc \
    musl-dev \
    postgresql-dev \
    python3-dev \
    libffi-dev \
    && rm -rf /var/cache/apk/*

# Estabelece o diretório de trabalho em /app
WORKDIR /app

# Copia o arquivo de requisitos
COPY ./requirements.txt ./

# Instala as dependências
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copia todo o código do projeto para o contêiner
COPY . .

# Comando para iniciar o Gunicorn
CMD ["gunicorn", "project_web.wsgi:application", "--bind", "0.0.0.0:10000"]

