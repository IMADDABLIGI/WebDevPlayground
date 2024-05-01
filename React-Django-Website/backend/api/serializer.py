from rest_framework import serializers
from django.contrib.auth.models import User

def checkPassword(password):
    if len(password) < 6:
        raise serializers.ValidationError("Password is too short")
    is_upper = False
    is_digit = False
    for e in password:
        if e.isupper():
            is_upper = True
        if e.isdigit():
            is_digit = True
    if is_digit == False or is_upper == False:
        raise serializers.ValidationError("Password should have at least one Capital Letter and a Digit")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        email = validated_data["email"]
        password = validated_data["password"]
        username = validated_data.get("email")

        user = User.objects.create_user(email=email, password=password, username=username)
        return user
    
    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        
        if email and User.objects.filter(email=email).exists(): # Check if email already exists
            raise serializers.ValidationError("Email address already exists.")

        # checkPassword(password)

        return attrs
    

