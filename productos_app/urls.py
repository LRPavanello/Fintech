from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_products, name='list_products'),
    path('agregar/', views.add_product, name='add_product'),
    path('eliminar/<int:pk>/', views.delete_product, name='delete_product'),
    path('detalle/<int:id>/', views.detail_product, name='detail_product'),
    path('caracteristica/agregar/<int:producto_id>/', views.add_caracteristica, name='add_caracteristica'),
    path('caracteristica/editar/<int:caracteristica_id>/', views.edit_caracteristica, name='edit_caracteristica'),
    path('caracteristica/eliminar/<int:id>/', views.delete_caracteristica, name='delete_caracteristica')
]