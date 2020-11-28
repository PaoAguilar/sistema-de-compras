from django.shortcuts import render, redirect

# Create your views here.


def indexDepartamento(request):
    return render(request, 'departamentos/index.html')
