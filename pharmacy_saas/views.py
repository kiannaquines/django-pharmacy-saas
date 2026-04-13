from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required
def dashboard(request):
    return render(request, "pages/dashboard.html")


@login_required
def inventory_dashboard(request):
    return render(request, "pages/inventory_dashboard.html")


@login_required
def sales_dashboard(request):
    return render(request, "pages/sales_dashboard.html")
