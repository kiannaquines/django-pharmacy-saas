from django.shortcuts import render
from django.template import TemplateDoesNotExist
from django.contrib.auth.decorators import login_required
def root_page_view(request):
    try:
        return render(request, 'pages/index.html')
    except TemplateDoesNotExist:
        return render(request, '404.html')
def dynamic_pages_view(request, template_name):
    try:
        return render(request, f'pages/{template_name}.html')
    except TemplateDoesNotExist:
        return render(request, f'404.html')
