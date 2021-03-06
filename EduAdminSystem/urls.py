from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'EduAdminSystem.views.home', name='home'),
    # url(r'^EduAdminSystem/', include('EduAdminSystem.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    #url(r'^test/', 'EduAdminSystem.views.helloworld'), 
    url(r'^user/', include('user.urls')), 
    url(r'^take/', include('take.urls')), 
    url(r'^student/', include('student.urls')),
    url(r'^teacher/', include('teacher.urls')), 
    url(r'^course/', include('course.urls')), 
    url(r'^administrator/', include('administrator.urls')), 
    url(r'^assessment/', include('assessment.urls')),
    url(r'^school/', include('school.urls')),
    url(r'^$', 'EduAdminSystem.views.index'), 
    url(r'^getview/$', 'EduAdminSystem.views.index_getview'), 
)
