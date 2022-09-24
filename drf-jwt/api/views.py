from rest_framework.permissions import AllowAny
from rest_framework import generics, viewsets
from .serializers import TaskSerializer, PostSerializer, UserSerializer
from .models import Task, Post


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    # JWTを生成する前にユーザーを作る必要があるのでこのページではpermissionをanyにする
    permission_classes = (AllowAny,)


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)


class PostRetrieveView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)


class TaskListView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (AllowAny,)


class TaskRetrieveView(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (AllowAny,)


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    # permission_classesを設定していないので、rest_api/settingsで設定したJWTが要求される
