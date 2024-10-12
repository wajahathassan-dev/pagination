from django.urls import path
from api.views import ProductView

urlpatterns = [
    path('product/', ProductView.as_view()),
    path('product/<int:max>/', ProductView.as_view()),
    path('product/<int:max>/<int:start>/', ProductView.as_view()),
]