from django.urls import path
from django.contrib.auth.decorators import login_required
from django.contrib.auth import views as auth_views

from .views import(
    LogOutView,
    SignUpView
)

urlpatterns = [
    path('', auth_views.LoginView.as_view(template_name='account/prueba.html'), name='log_in'),
    path('log-out/', login_required(LogOutView.as_view()), name='log_out'),
    path('sign-up/', SignUpView.as_view(), name='sign_up')

    ]