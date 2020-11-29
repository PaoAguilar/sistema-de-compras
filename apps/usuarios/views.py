from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LogoutView as BaseLogoutView
from django.views.generic import View, FormView, ListView, UpdateView, DeleteView, CreateView
from django.conf import settings
from django.utils.crypto import get_random_string
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, REDIRECT_FIELD_NAME
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy
from django.contrib.auth.models import User, Group, Permission

from .forms import(
    SignUpForm,
    UserCreateFormNew,
    UserForm,
    AssignGroup,
    AssignPermissionForm
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

class UserList(ListView):
    model = User
    template_name = 'account/list_user.html'

    def get_queryset(self):
        return self.model.objects.all()


class UserDelete(SuccessMessageMixin, DeleteView):
    model = User
    template_name = 'account/delete_user.html'
    success_message = "Se Elimino el usuario con exito"
    success_url = reverse_lazy('list_user')


class UserUpdate(SuccessMessageMixin, UpdateView):
    model = User
    form_class = UserForm
    template_name = 'account/edit_user.html'
    success_message = "Se Actualizo el usuario con exito"
    success_url = reverse_lazy('list_user')


class UserCreate(SuccessMessageMixin, CreateView):
    model = User
    template_name = 'account/create_user.html'
    form_class = UserCreateFormNew
    success_message = "Se creo con exito el usuario."
    success_url = reverse_lazy('list_user')

class CreateGroupView(CreateView):
    template_name = 'account/create_group.html'
    form_class = AssignGroup
    success_url = reverse_lazy('list_group')


class ListGroupView(ListView):
    template_name = 'account/list_group.html'
    model = Group

    def get_queryset(self):
        return self.model.objects.all()


class DeleteGroupView(SuccessMessageMixin, DeleteView):
    model = Group
    template_name = 'account/delete_group.html'
    success_message = "Se Elimino el grupo con exito"
    success_url = reverse_lazy('list_group')


class UpdateGroupView(SuccessMessageMixin, UpdateView):
    model = Group
    form_class = AssignGroup
    template_name = 'account/edit_group.html'
    success_message = "Se Actualizo el grupo con exito"
    success_url = reverse_lazy('list_group')

class CreatePermissionView(CreateView):
    template_name = 'account/create_permission.html'
    form_class = AssignPermissionForm
    success_url = reverse_lazy('list_permission')


class ListPermissionView(ListView):
    template_name = 'account/list_permission.html'
    model = Permission

    def get_queryset(self):
        return self.model.objects.all()


class DeletePermissionView(SuccessMessageMixin, DeleteView):
    model = Permission
    template_name = 'account/delete_permission.html'
    success_message = "Se Elimino el Permiso con exito"
    success_url = reverse_lazy('list_permission')


class UpdatePermissionView(SuccessMessageMixin, UpdateView):
    model = Permission
    form_class = AssignPermissionForm
    template_name = 'account/edit_permission.html'
    success_message = "Se Actualizo el permiso con exito"
    success_url = reverse_lazy('list_permission')
