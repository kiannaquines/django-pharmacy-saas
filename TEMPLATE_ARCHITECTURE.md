# Template Architecture

This project uses **Django template inheritance only**.

## Folder Layout

All project-level templates live under `templates/` (configured via `TEMPLATES[0]["DIRS"]`).

```
templates/
  base.html
  layouts/
    authenticated.html
  partials/
    footer.html
    messages.html
    navbar.html
    sidebar.html
  pages/
    dashboard.html
  registration/
    login.html
    logged_out.html
```

## How It Composes

- `base.html` is the global HTML shell and defines the main blocks (`title`, `content`, `extra_head`, `extra_js`).
- `layouts/authenticated.html` extends `base.html` and composes the app chrome:
  - `partials/navbar.html`
  - `partials/sidebar.html`
  - `partials/footer.html`
  - `partials/messages.html` (global message rendering)
- Pages (e.g. `pages/dashboard.html`) extend `layouts/authenticated.html`.

## Static Assets

The repo includes a Tailwick/Tailwind static bundle under:

`Tailwick_v2.2.0/Django/tailwick/static/`

This is exposed through `STATICFILES_DIRS` so templates can use `{% static %}` without copying assets.
