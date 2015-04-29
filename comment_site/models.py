from datetime import datetime
from dbarray import IntegerArrayField
from django.db import models

# Create your models here.
class Comment(models.Model):

    text = models.TextField(max_length=1024, blank=False)
    pub_datetime = models.DateTimeField(default=datetime.now, blank=True)

    # For threaded comments
    path = IntegerArrayField(blank=True, editable=False)
    depth = models.PositiveSmallIntegerField(default=0)

    def __unicode__(self):
        return self.text