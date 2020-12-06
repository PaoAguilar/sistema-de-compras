from django.urls import path, include
from apps.reportes.views import *

urlpatterns = [
    # URLS QUE MANEJAN LOS REPORTES
    path('reportes/', reporteArtDepto.as_view(), name='reportes')
    ]