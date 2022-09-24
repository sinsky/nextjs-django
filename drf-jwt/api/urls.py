from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from api.views import TaskViewSet, CreateUserView, UserListView, TaskListView, TaskRetrieveView, PostListView, PostRetrieveView

# viewsetsから継承したらrouterで指定する
router = routers.DefaultRouter()
router.register('tasks', TaskViewSet, basename='tasks')

# genericsから継承したらurlpatternsで指定する
urlpatterns = [
    path('list-post/', PostListView.as_view(), name='list-post'),
    path('detail-post/<str:pk>/', PostRetrieveView.as_view(), name='detail-post'),
    path('list-task/', TaskListView.as_view(), name='list-task'),
    path('detail-task/<str:pk>/', TaskRetrieveView.as_view(), name='detail-task'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('list-users/', UserListView.as_view(), name='list-users'),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),
]
