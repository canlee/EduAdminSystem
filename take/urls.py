from django.conf.urls import patterns, include, url

urlpatterns = patterns('', 
        url('getTakeCourses/$', 
                'take.views.get_take_courses'),
)
