from django.urls import path
from .views import ContactAPIView, JobListAPIView, JobapplyAPIView, PortfolioListAPIView, PostListAPIView
urlpatterns = [
    path('Contact/feedback', ContactAPIView.as_view()),
    path('JobApply/jobapply', JobapplyAPIView.as_view()),#http://127.0.0.1:8000/apiv1/JobApply/jobapply
    path('Portfolio/', PortfolioListAPIView.as_view()),#http://127.0.0.1:8000/apiv1/Portfolio/
    path('Post/', PostListAPIView.as_view()),
    path('Job/', JobListAPIView.as_view()),
]
