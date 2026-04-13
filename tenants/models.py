from django.db import models
from django_tenants.models import TenantMixin, DomainMixin


class Client(TenantMixin):
    """
    Tenant model representing a pharmacy client.
    Each tenant has its own schema in PostgreSQL.
    """

    name = models.CharField(max_length=100)
    created_on = models.DateField(auto_now_add=True)

    # django-tenants fields (inherited from TenantMixin):
    # - schema_name
    # - auto_create_schema
    # - auto_drop_schema

    auto_create_schema = True

    def __str__(self):
        return self.name


class Domain(DomainMixin):
    """
    Domain model for tenant subdomains.
    Links a domain/subdomain to a tenant.
    """

    pass
