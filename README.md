# Basic Web Application

[![Python](https://img.shields.io/badge/Python-3.11+-yellow?style=for-the-badge&logo=python&logoColor=white&labelColor=101010)](https://python.org)
[![HTML](https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010)](https://developer.mozilla.org/en/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-blue?style=for-the-badge&logo=css3&logoColor=white&labelColor=101010)](https://developer.mozilla.org/en/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)](https://developer.mozilla.org/en/docs/Web/JavaScript)

A web page for managing a product inventory made using [Python](https://python.org), [Django](https://www.djangoproject.com/), [Bootstrap](https://getbootstrap.com/), and [PostgreSQL](https://www.postgresql.org/). The application allows listing, adding, and deleting products, adding a description, and marking them as available or unavailable. Additionally, multiple features can be added to the products.

## Technologies Used

- **Backend**: Django 5.1
- **Frontend (Templates)**: HTML, CSS, JavaScript
- **Database**: PostgreSQL
- **Others**: Bootstrap 5

## Requirements

It is essential to have the following requirements to run the project:
- Docker
- Docker Compose

## Instructions to Run the Project

1. Navigate to the repository:
   ```
   cd Fintech
   ```
2. Run the commands in a terminal:
    ```
    docker compose up --build
    ```
3. Apply the necessary migrations:
    ```
    docker compose run web python manage.py makemigrations
    docker compose run web python manage.py migrate 
    ```
4. You can create a superuser (Optional) if you want to manage the data from the Django admin interface:
    ```
    docker compose run web python manage.py createsuperuser
    ```
5. Finally, run the project on port 8000:
    ```
    docker compose up or (docker compose up --build)
    ```
6. Access the application at:

    ```
    http://127.0.0.1:8000/
    ```

7. If you encounter permission issues, run the following commands and then re-run the previous ones:

    ```
    sudo usermod -aG docker $USER
    ```
    ```
    exec su -l $USER
    ```

## Once here, you can perform all the actions allowed by the application

### Product List: You can add more products, view details, or delete products.
![](./images/lista.png)

### Adding a New Product: You can add a new product with a description and mark it as available, or return to the home page.
![](./images/agregar.png)

### Product Details: You can add and edit features. On the home page, the description will be shown unless features are added to the product.
![](./images/detalles.png)

### Adding a Feature: This includes a title and a value, e.g., **Screen:** IPS. Multiple features can be added.
![](./images/agregar-detalle.png)

### Editing Product Features: You can edit the features of products.
![](./images/editar-detalle.png)

## The application has alerts for adding a new product, deleting a product, or removing a feature.

### Delete Product:
![](./images/captura1.png)

### Add Product:
![](./images/captura2.png)

### Delete Feature:
![](./images/captura3.png)
