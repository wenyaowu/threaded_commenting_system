from django.conf.urls import patterns, include, url
from django.contrib import admin
from comment_site import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'threaded_commenting_system.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', views.index, name='index')
)
