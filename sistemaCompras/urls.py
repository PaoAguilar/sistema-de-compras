"""sistemaCompras URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render
from django.conf.urls.static import static
from django.urls import path
from apps.personas.models import Departamento
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    return render(request, 'pages/index.html')


urlpatterns = [
    path('',auth_views.LoginView.as_view(template_name='account/prueba.html'), name='login'),
    path('home/', index, name='home'),
    path('admin/', admin.site.urls),
    path('accounts/', include('apps.usuarios.urls'), name='accounts'),
    path('departamento/', include('apps.personas.urls'),
         name='departamento'),  # /departamento/departamento
    path('articulo/', include('apps.articulos.urls'), name='articulo')
    
]
