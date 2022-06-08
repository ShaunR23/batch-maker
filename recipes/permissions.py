from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return True

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.phase == 'DRAFT'

class IsUserOrReadOnly(permissions.SAFE_METHODS):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
