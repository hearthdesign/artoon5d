from django.apps import AppConfig


class Artoon5DBlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'artoon5d_blog'

    def ready(self):
      from . import signals
