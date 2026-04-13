# Pharmacy SaaS Platform

A multi-tenant Software-as-a-Service (SaaS) platform for pharmacy inventory management and operations. Built with Django and PostgreSQL, leveraging a tenant-aware architecture to serve multiple pharmacy businesses from a single codebase while maintaining complete data isolation.

## 🏗️ Architecture Overview

### Multi-Tenant Architecture

This platform implements a **shared database, shared schema multi-tenancy** pattern using `django-tenants`. Each pharmacy client operates as an isolated tenant with:

- **Data Isolation**: Complete separation of tenant data at the database level
- **Subdomain Routing**: Each tenant accessed via unique subdomain (e.g., `pharmacy-a.example.com`)
- **Shared Application Logic**: Single codebase serves all tenants
- **Tenant-Aware Queries**: All database queries automatically filtered by tenant context

```
┌─────────────────────────────────────────────────────┐
│                  Load Balancer / Proxy               │
└─────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
    pharmacy-a.com  pharmacy-b.com  pharmacy-c.com
          │              │              │
          └──────────────┴──────────────┘
                         │
┌─────────────────────────────────────────────────────┐
│          Django Application (Tenant Middleware)      │
│  ┌────────────────────────────────────────────┐    │
│  │  TenantMainMiddleware                      │    │
│  │  - Extracts subdomain from request         │    │
│  │  - Sets tenant context                     │    │
│  │  - Routes to appropriate schema            │    │
│  └────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
                         │
┌─────────────────────────────────────────────────────┐
│              PostgreSQL Database                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ public   │  │ tenant_a │  │ tenant_b │          │
│  │ schema   │  │ schema   │  │ schema   │  ...     │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
```

### Software Design Principles

#### SOLID Principles

**S - Single Responsibility Principle**

- Each Django app handles a specific domain (e.g., inventory, sales, customers)
- Models represent single business entities with focused responsibilities
- Views handle only request/response logic, delegating business logic to services

**O - Open/Closed Principle**

- Tenant functionality extended through inheritance, not modification of core django-tenants
- Custom managers and querysets extend base Django functionality
- Plugin architecture for tenant-specific customizations

**L - Liskov Substitution Principle**

- All tenant models inherit from `TenantMixin` and can be used interchangeably
- Custom user models extend Django's AbstractBaseUser without breaking contracts
- Database routers implement consistent interfaces

**I - Interface Segregation Principle**

- Separate interfaces for public tenant schemas vs private tenant schemas
- API endpoints segregated by functionality (inventory, billing, reporting)
- Mixin classes provide focused, optional functionality

**D - Dependency Inversion Principle**

- Business logic depends on abstract service interfaces, not concrete implementations
- Database access abstracted through Django ORM
- External integrations (payment, notifications) use adapter patterns

#### KISS (Keep It Simple, Stupid)

- **Simple Tenant Isolation**: Leveraging battle-tested `django-tenants` instead of custom solution
- **Convention Over Configuration**: Following Django best practices for predictable structure
- **Minimal Dependencies**: Only essential packages included to reduce complexity
- **Clear URL Routing**: Straightforward subdomain-based tenant identification

#### DRY (Don't Repeat Yourself)

- **Shared Base Models**: Common fields (created_at, updated_at) in abstract base classes
- **Reusable Tenant Utilities**: Centralized tenant management functions
- **Template Inheritance**: Base templates shared across tenant interfaces
- **Database Router**: Single router handles all tenant-aware query routing

## 🚀 Features

- ✅ **Multi-Tenant Architecture** - Complete data isolation per pharmacy
- ✅ **Inventory Management** - Real-time stock tracking and management
- ✅ **Sales & Billing** - Point of sale and invoice generation
- ✅ **Customer Management** - Patient records and prescription tracking
- ✅ **Reporting & Analytics** - Business intelligence dashboards
- ✅ **User Management** - Role-based access control per tenant
- ✅ **Modern UI** - Responsive interface using Tailwick framework

## 🛠️ Technology Stack

### Backend

- **Django 6.0.4** - High-level Python web framework
- **django-tenants 3.10.1** - Multi-tenancy support with PostgreSQL schemas
- **PostgreSQL** - Robust relational database with schema support
- **psycopg2-binary 2.9.11** - PostgreSQL adapter for Python

### Frontend

- **Tailwick v2.2.0 (HTML)** - Modern admin dashboard template (using HTML version)
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Responsive Design** - Mobile-first approach

### Infrastructure

- **ASGI 3.11.1** - Asynchronous server gateway interface support
- **SQLParse 0.5.5** - SQL parsing and formatting

## 📋 Prerequisites

- Python 3.11+
- PostgreSQL 15+
- Node.js 18+ (for frontend assets)
- pip and virtualenv

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd pharmacy-saas
```

### 2. Create Virtual Environment

```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Database

Create a PostgreSQL database:

```bash
createdb inventory_db
```

Update database credentials in `pharmacy_saas/settings.py`:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "inventory_db",
        "USER": "your_postgres_user",
        "PASSWORD": "your_password",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}
```

### 5. Configure Tenant Settings

In `pharmacy_saas/settings.py`, ensure these settings are configured:

```python
# Tenant configuration
TENANT_MODEL = "customers.Client"  # Your tenant model
TENANT_DOMAIN_MODEL = "customers.Domain"  # Your domain model

SHARED_APPS = [
    'django_tenants',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    # Add apps that should be shared across all tenants
]

TENANT_APPS = [
    'django.contrib.sessions',
    'django.contrib.messages',
    # Add apps that should be tenant-specific
]

INSTALLED_APPS = SHARED_APPS + [
    app for app in TENANT_APPS if app not in SHARED_APPS
]
```

### 6. Create Tenant Models

Create your tenant and domain models (example):

```python
# customers/models.py
from django_tenants.models import TenantMixin, DomainMixin
from django.db import models

class Client(TenantMixin):
    name = models.CharField(max_length=100)
    created_on = models.DateField(auto_now_add=True)

    auto_create_schema = True

class Domain(DomainMixin):
    pass
```

### 7. Run Migrations

```bash
# Create public schema migrations
python manage.py makemigrations

# Migrate shared apps to public schema
python manage.py migrate_schemas --shared

# Create initial tenant (example)
python manage.py create_tenant
```

### 8. Frontend Setup (Tailwick)

```bash
cd Tailwick_v2.2.0/HTML
npm install
npm run dev  # Development mode with live reload
# or
npm run build  # Production build
```

The Tailwick HTML templates are located in `Tailwick_v2.2.0/HTML/src/` and will be integrated with Django templates.

### 9. Run Development Server

```bash
python manage.py runserver
```

Access the application at `http://127.0.0.1:8000`

## 📊 Database Schema Design

### Schema Patterns

**Public Schema** (Shared)

- Tenant metadata (Client, Domain)
- Global configurations
- Authentication backends

**Tenant Schemas** (Isolated)

- Inventory items
- Sales transactions
- Customer/patient records
- Prescriptions
- User profiles (tenant-specific)

### Example Models

```python
# Tenant-aware base model
class TenantAwareModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

# Inventory model (tenant-specific)
class Product(TenantAwareModel):
    sku = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=200)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        indexes = [
            models.Index(fields=['sku']),
            models.Index(fields=['name']),
        ]
```

## 🔐 Multi-Tenancy Implementation

### Tenant Isolation

```python
# All queries automatically filtered by tenant
from inventory.models import Product

# This query only returns products for current tenant
products = Product.objects.all()

# Tenant context set by TenantMainMiddleware based on subdomain
```

### Creating a New Tenant

```bash
python manage.py create_tenant \
    --name="ABC Pharmacy" \
    --domain="abc.pharmacy-saas.com"
```

### Accessing Tenant Data

```python
from django_tenants.utils import schema_context

# Switch to specific tenant context
with schema_context('tenant_schema_name'):
    products = Product.objects.all()
```

## 🎨 Frontend

This project uses Tailwick HTML templates as the foundation for the user interface.

### Structure

```
Tailwick_v2.2.0/HTML/
├── src/               # HTML templates & components
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   └── ...
├── vite.config.js     # Build configuration
└── package.json
```

### Integration Approach

- Django serves the compiled Tailwick HTML templates
- Static assets (CSS, JS, images) served from Django's static files system
- Templates adapted to Django template syntax for dynamic content
- Vite handles asset bundling and optimization

### Features
- Responsive layouts
- Dark/light mode
- 50+ pre-built components
- Charts and data visualization
- Form components
- Authentication pages

## 🧪 Development Guidelines

### Code Organization

```

pharmacy-saas/
├── pharmacy_saas/ # Project configuration
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── apps/ # Django applications
│ ├── inventory/
│ ├── sales/
│ ├── customers/
│ └── reports/
├── templates/ # HTML templates
├── static/ # Static files
└── requirements.txt

````

### Best Practices

1. **Always Be Tenant-Aware**: Remember that queries are scoped to current tenant
2. **Use Migrations Carefully**: Run `migrate_schemas` for tenant-specific apps
3. **Test Across Tenants**: Ensure features work correctly in multi-tenant context
4. **Secure Tenant Data**: Never leak data between tenants
5. **Performance**: Index tenant-specific queries appropriately

### Running Tests

```bash
# Run all tests
python manage.py test

# Run tests for specific app
python manage.py test inventory

# With coverage
coverage run --source='.' manage.py test
coverage report
````

## 🚀 Deployment

### Production Checklist

- [ ] Set `DEBUG = False`
- [ ] Configure `ALLOWED_HOSTS`
- [ ] Use environment variables for secrets
- [ ] Configure PostgreSQL connection pooling
- [ ] Set up Redis for caching/sessions
- [ ] Configure static files serving (WhiteNoise/CDN)
- [ ] Set up SSL certificates for all subdomains
- [ ] Configure domain wildcard DNS (\*.yourdomain.com)
- [ ] Implement monitoring and logging
- [ ] Set up automated backups

### Environment Variables

```bash
# .env example
SECRET_KEY=your-secret-key
DEBUG=False
DATABASE_URL=postgresql://user:pass@localhost/dbname
ALLOWED_HOSTS=.pharmacy-saas.com
```

### Docker Deployment (Example)

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["gunicorn", "pharmacy_saas.wsgi:application", "--bind", "0.0.0.0:8000"]
```

## 📈 Scalability Considerations

- **Database**: PostgreSQL supports thousands of schemas efficiently
- **Caching**: Implement Redis with tenant-aware cache keys
- **Load Balancing**: Horizontal scaling with shared session storage
- **Static Assets**: CDN for Tailwick assets and media files
- **Background Tasks**: Celery with tenant-aware task routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📧 Support

For questions and support, please contact the development team.

---

**Built with ❤️ using Django, PostgreSQL, and Tailwick**
