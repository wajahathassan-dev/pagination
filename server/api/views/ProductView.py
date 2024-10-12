from api.serializers import ProductSerializer
from api.models import Product
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ProductView(APIView):
    def get(self, request, max=None, start=1):
        try:
            if max is None:
                products = Product.objects.all()
                serializer = ProductSerializer(products, many=True)
            else:
                products = Product.objects.all()[start-1:(start-1)+max]
                serializer = ProductSerializer(products, many=True)

            response = {
                'products': serializer.data,
                'total': Product.objects.count()
            }
            return Response(data=response, status=status.HTTP_200_OK)

        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
