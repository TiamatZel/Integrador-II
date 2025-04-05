from django.urls import path, include
from rest_framework_nested import routers
from .views import CourseViewSet, LessonViewSet

router = routers.DefaultRouter()
router.register('', CourseViewSet)

courses_router = routers.NestedDefaultRouter(router, '', lookup='course')
courses_router.register('lessons', LessonViewSet, basename='course-lessons')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(courses_router.urls)),
]