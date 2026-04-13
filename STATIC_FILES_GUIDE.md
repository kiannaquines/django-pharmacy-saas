# Tailwick CSS Integration Guide

## Overview

The Pharmacy SaaS platform uses Tailwick v2.2.0 (HTML version) for the frontend UI. The CSS and JavaScript assets are integrated into Django's static files system.

## Directory Structure

```
pharmacy-saas/
├── static/                          # Project-specific static files
│   └── (custom CSS, JS, images)
├── Tailwick_v2.2.0/
│   └── HTML/
│       └── src/
│           └── assets/              # Tailwick assets (linked via STATICFILES_DIRS)
│               ├── css/
│               │   ├── style.css    # Main stylesheet
│               │   ├── themes.css   # Theme configurations
│               │   ├── custom/      # Custom component styles
│               │   └── structure/   # Layout structure styles
│               ├── js/              # JavaScript files
│               ├── images/          # Image assets
│               └── json/            # Data files
└── templates/                       # Django templates
    ├── base.html                    # Base template
    ├── dashboard.html               # Dashboard template
    └── partials/                    # Reusable components
```

## Configuration

### Settings (pharmacy_saas/settings.py)

```python
STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"  # For production (collectstatic)

# Static files directories
STATICFILES_DIRS = [
    BASE_DIR / "static",                           # Custom static files
    BASE_DIR / "Tailwick_v2.2.0" / "HTML" / "src" / "assets",  # Tailwick assets
]

# Media files (user uploads)
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
```

### URLs (pharmacy_saas/urls.py)

Static file serving is configured for development:

```python
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

## Using Static Files in Templates

### Loading the Static Tag

```django
{% load static %}
```

### Linking CSS Files

```html
<!-- Main Tailwick stylesheet -->
<link rel="stylesheet" href="{% static 'css/style.css' %}" />

<!-- Additional stylesheets -->
<link rel="stylesheet" href="{% static 'css/themes.css' %}" />
```

### Linking JavaScript Files

```html
<!-- Tailwick JavaScript -->
<script src="{% static 'js/app.js' %}"></script>

<!-- Additional scripts -->
<script src="{% static 'js/pages/dashboard-analytics.js' %}"></script>
```

### Using Images

```html
<img src="{% static 'images/logo.png' %}" alt="Logo" />
```

## Available Tailwick Components

### CSS Components (in custom/ folder)

- `_buttons.css` - Button styles
- `_card.css` - Card components
- `_dropdown.css` - Dropdown menus
- `_forms.css` - Form elements
- `_calendar.css` - Calendar components
- `_chart.css` - Chart configurations
- `_choices.css` - Select/choice components
- `_gridjs.css` - Grid/table styles
- `_helper.css` - Utility classes
- `_print.css` - Print styles
- `_quill-editor.css` - Rich text editor
- `_reboot.css` - CSS reset
- `_simplebar.css` - Custom scrollbars
- `_sweetalert2.css` - Alert/modal styles

### Structure Components (in structure/ folder)

- `_general.css` - General layout
- `_sidenav.css` - Sidebar navigation
- `_topbar.css` - Top navigation bar

## Development Workflow

### 1. Development Server

During development, Django serves static files automatically:

```bash
python manage.py runserver
```

Static files are accessible at:

- `/static/css/style.css` → Tailwick main CSS
- `/static/js/app.js` → Tailwick JavaScript
- `/static/images/*` → Images

### 2. Template Usage Example

```django
{% extends "base.html" %}
{% load static %}

{% block extra_css %}
<link rel="stylesheet" href="{% static 'css/custom/my-custom.css' %}">
{% endblock %}

{% block content %}
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Hello Tailwick!</h5>
        <p class="text-slate-500">Your content here</p>
    </div>
</div>
{% endblock %}

{% block extra_js %}
<script src="{% static 'js/pages/my-page.js' %}"></script>
{% endblock %}
```

## Production Deployment

### Collecting Static Files

Before deployment, collect all static files into `STATIC_ROOT`:

```bash
python manage.py collectstatic
```

This copies all files from `STATICFILES_DIRS` into the `staticfiles/` directory.

### Serving Static Files

In production, use a web server (Nginx, Apache) or CDN to serve static files:

**Nginx Example:**

```nginx
location /static/ {
    alias /path/to/pharmacy-saas/staticfiles/;
    expires 30d;
}

location /media/ {
    alias /path/to/pharmacy-saas/media/;
}
```

### Using WhiteNoise (Alternative)

For simpler deployment, use WhiteNoise to serve static files:

```bash
pip install whitenoise
```

Update `settings.py`:

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Add this
    # ... other middleware
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

## Customization

### Adding Custom CSS

1. Create your custom CSS files in `static/css/custom/`
2. Import them in your templates:

```django
{% block extra_css %}
<link rel="stylesheet" href="{% static 'css/custom/my-styles.css' %}">
{% endblock %}
```

### Modifying Tailwick Styles

To customize Tailwick:

1. **Don't edit Tailwick files directly** - they'll be overwritten on updates
2. Instead, add custom CSS in `static/css/` to override Tailwick styles
3. Or modify `themes.css` for theme-level changes

### Theme Customization

Tailwick supports multiple themes configured in `themes.css`:

- Light mode
- Dark mode
- Bordered layout
- Horizontal/Vertical layouts

Toggle themes using JavaScript:

```javascript
// Switch to dark mode
document.documentElement.classList.add("dark");
document.documentElement.classList.remove("light");
```

## Troubleshooting

### CSS Not Loading?

1. Check that `django.contrib.staticfiles` is in `INSTALLED_APPS`
2. Verify `STATICFILES_DIRS` paths are correct
3. Clear browser cache
4. Check browser console for 404 errors

### Static Files 404 in Production?

1. Run `python manage.py collectstatic`
2. Verify web server configuration
3. Check `STATIC_ROOT` and `STATIC_URL` settings

### Template Not Finding Static Files?

1. Ensure `{% load static %}` is at the top of template
2. Use `{% static 'path/to/file' %}` not hardcoded paths
3. Check file paths are relative to `STATICFILES_DIRS`

## Resources

- **Tailwick Documentation**: Check `Tailwick_v2.2.0/docs.html`
- **Django Static Files**: https://docs.djangoproject.com/en/6.0/howto/static-files/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Last Updated**: April 2026
