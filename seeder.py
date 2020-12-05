# Para usar la app para para poblar la base con este archivo:
import django
django.setup()
from apps.articulos.models import *
from apps.personas.models import *
import random

# Ejecutar el siguiente comando en consola
# pip install seed
# pip install django_seed
# Agregar en setting.py aplicaciones instaladas 'django_seed',
# export DJANGO_SETTINGS_MODULE=sistemaCompras.settings
# para ejecutar en consola: python seeder.py

# Crear articulo
def cargar_articulos(num=15):
    print("Articulos")
    from django_seed import Seed
    seeder = Seed.seeder()
    seeder.add_entity(Articulo, num, {
        'serial': lambda x: seeder.faker.password(length=8, special_chars=False, digits=True, upper_case=True, lower_case=False),
        'nombre': lambda x: random.choice(["iPhone X", "Xiaomi MI A2", "Smart TV", "Wifi Dongle", "Transmisor Bluetooth"]),
        'marca': lambda x: random.choice(["Samsung", "Apple", "Nintendo", "Canon", "Nokia", "Sony", "Dell", "Intel"]),
        'modelo': lambda x: random.choice(["Galaxy S20", "Galaxy A30", "UHD 4K TV", "FULL HD TV", "MR20GA", "OLEDTV", "Nano Cell TV"]),
        'descripcion': lambda x: seeder.faker.text(max_nb_chars=200),
    })
    pks_articulos = seeder.execute()[Articulo]
    return pks_articulos

# Crear departamentos
def cargar_departamentos(num=15):
    from django_seed import Seed
    seeder = Seed.seeder()
    seeder.add_entity(Departamento, num, {
        'codigo': lambda x: "D-" + seeder.faker.password(length=4, special_chars=False, digits=True, upper_case=True, lower_case=False),
        'nombre': lambda x: random.choice(["Financiero", "Recursos Humanos", "Marketing", "Compras", "Logistica y operaciones", "Control de gestion"]),
    })
    pks_departamentos = seeder.execute()[Departamento]
    return pks_departamentos


def main():
    cargar_articulos()
    cargar_departamentos()

main()