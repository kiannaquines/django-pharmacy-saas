"""
Management command to create the public tenant and domains for local development.
"""

from django.core.management.base import BaseCommand
from tenants.models import Client, Domain


class Command(BaseCommand):
    help = "Creates the public tenant and local development domains"

    def handle(self, *args, **options):
        # Create public tenant if it doesn't exist
        try:
            public_tenant = Client.objects.get(schema_name="public")
            self.stdout.write(self.style.WARNING("Public tenant already exists"))
        except Client.DoesNotExist:
            public_tenant = Client(schema_name="public", name="Public Tenant")
            public_tenant.save()
            self.stdout.write(self.style.SUCCESS("Created public tenant"))

        # Create domains for localhost development
        domains = [
            "localhost",
            "127.0.0.1",
            "localhost:8000",
            "127.0.0.1:8000",
        ]

        for domain_name in domains:
            domain, created = Domain.objects.get_or_create(
                domain=domain_name,
                defaults={
                    "tenant": public_tenant,
                    "is_primary": domain_name == "localhost",
                },
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"Created domain: {domain_name}"))
            else:
                self.stdout.write(
                    self.style.WARNING(f"Domain already exists: {domain_name}")
                )

        self.stdout.write(self.style.SUCCESS("Setup complete!"))
