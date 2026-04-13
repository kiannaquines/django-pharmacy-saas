from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.urls import reverse


@login_required
def dashboard(request):
    return render(
        request,
        "pages/dashboard.html",
        {
            "breadcrumbs": [
                {"label": "Home", "url": reverse("dashboard")},
                {"label": "Dashboard"},
            ],
        },
    )
