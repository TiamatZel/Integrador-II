from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, Lesson
from .serializers import CourseSerializer, LessonSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user)

    @action(detail=True, methods=['post'])
    def enroll(self, request, pk=None):
        course = self.get_object()
        user = request.user
        
        if course.students.filter(id=user.id).exists():
            return Response(
                {'message': 'Already enrolled'},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        course.students.add(user)
        return Response(
            {'message': 'Successfully enrolled'},
            status=status.HTTP_200_OK
        )

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        course = Course.objects.get(pk=self.kwargs['course_pk'])
        serializer.save(course=course)