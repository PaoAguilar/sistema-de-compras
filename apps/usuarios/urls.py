from django.urls import path
from django.contrib.auth.decorators import login_required
from django.contrib.auth import views as auth_views

from .views import(
    LogOutView,
    SignUpView,
    UserList,
    UserDelete,
    UserUpdate,
    UserCreate,
    CreateGroupView,
    ListGroupView,
    DeleteGroupView,
    UpdateGroupView,
    CreatePermissionView,
    ListPermissionView,
    DeletePermissionView,
    UpdatePermissionView
)

urlpatterns = [
    path('', auth_views.LoginView.as_view(template_name='account/prueba.html'), name='log_in'),
    path('log-out/', login_required(LogOutView.as_view()), name='log_out'),
    path('sign-up/', SignUpView.as_view(), name='sign_up'),
    path('user/list/', login_required(UserList.as_view()), name='list_user'),   
    path('user/delete/<int:pk>/', login_required(UserDelete.as_view()), name= 'delete_user'),
    path('user/update/<int:pk>/',login_required(UserUpdate.as_view()), name= 'update_user'),
    path('user/create/', login_required(UserCreate.as_view()), name='create_user'),
    path('group/create', login_required(CreateGroupView.as_view()),name='create_group' ),
    path('group/list/', login_required(ListGroupView.as_view()), name='list_group'),  
    path('group/delete/<int:pk>/', login_required(DeleteGroupView.as_view()), name= 'delete_group'),
    path('group/update/<int:pk>/',login_required(UpdateGroupView.as_view()), name= 'update_group'),
    path('permission/create', login_required(CreatePermissionView.as_view()),name='create_permission'),
    path('permission/list/', login_required(ListPermissionView.as_view()), name='list_permission'),  
    path('permission/delete/<int:pk>/', login_required(DeletePermissionView.as_view()), name= 'delete_permission'),
    path('permission/update/<int:pk>/',login_required(UpdatePermissionView.as_view()), name= 'update_permission')
    ]