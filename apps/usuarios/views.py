from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LogoutView as BaseLogoutView
from django.views.generic import View, FormView, ListView, UpdateView, DeleteView, CreateView
from django.conf import settings
from django.utils.crypto import get_random_string
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, REDIRECT_FIELD_NAME

from .forms import(
    SignUpForm
)
# Create your views here.

class LogOutView(LoginRequiredMixin, BaseLogoutView):
    template_name = 'account/log_out.html'

class VisitaView(View):
    def dispatch(self, request, *args, **kwargs):  
        if request.user.is_authenticated:
            return redirect(settings.LOGIN_REDIRECT_URL)

        return super().dispatch(request, *args, **kwargs)

class SignUpView(VisitaView, FormView):
    template_name = 'account/sign_up.html'
    form_class = SignUpForm

    def form_valid(self, form):
        request = self.request
        user = form.save(commit=False)

        if settings.DISABLE_USERNAME:
            user.username = get_random_string()
        else:
            user.username = form.cleaned_data['username']

        if settings.ENABLE_USER_ACTIVATION:
            user.is_active = True
        user.save()

        if settings.DISABLE_USERNAME:
            user.username = f'user_{user.id}'
            user.save()

        if settings.ENABLE_USER_ACTIVATION:
            code = get_random_string(20)

        else:
            raw_password = form.cleaned_data['password1']

            user = authenticate(username=user.username, password=raw_password)
            login(request, user)

            messages.success(request, _('Te has registrado correctamente!'))

        return redirect('login')