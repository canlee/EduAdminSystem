from django.conf.urls import patterns, include, url

urlpatterns = patterns('', 
        url(r'getTakeCourses/$', 
                'take.views.get_take_courses'), 
)