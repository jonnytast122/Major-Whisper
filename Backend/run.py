from flask import Flask, request
from flask_restx import Api, Resource, fields
import firebase_admin
from firebase_admin import credentials, auth
import requests
from email_validator import validate_email, EmailNotValidError


# Initialize Flask app
app = Flask(__name__)
api = Api(app, version='1.0', title='Firebase Authentication API', description='A simple API to register and authenticate users using Firebase')

# Initialize Firebase Admin SDK
cred = credentials.Certificate('serviceAccountKey.json')  # Replace with your own service account key
firebase_admin.initialize_app(cred)

# Firebase Authentication REST API endpoint
API_KEY = "AIzaSyBbYpeC6uWLVSqKNFSFYCzHzdzg-5zSgQM"
FIREBASE_VERIFY_PASSWORD_URL = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={API_KEY}"
FIREBASE_VERIFY_EMAIL_URL = f"https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key={API_KEY}"
FIREBASE_SIGNUP_URL = f"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={API_KEY}"

# User registration model
register_model = api.model('User Registration', {
    'email': fields.String(required=True, description='User email'),
    'password': fields.String(required=True, description='User password')
})

# User login model
login_model = api.model('User Login', {
    'email': fields.String(required=True, description='User email'),
    'password': fields.String(required=True, description='User password')
})

# User registration and login endpoints
forgot_password_model = api.model('Forgot Password', {
    'email': fields.String(required=True, description='User email')
})

@api.route('/register')
class Register(Resource):
    @api.expect(register_model)
    def post(self):
        data = request.json
        email = data['email']
        password = data['password']

        try: 
            validate_email(email)
        except EmailNotValidError as e:
            return {'message': 'Invalid email format'}, 400

        payload = {
            "email": email,
            "password": password,
            "returnSecureToken": True
        }

        response = requests.post(FIREBASE_SIGNUP_URL, json=payload)
        print(response.json)  # Print response content for debugging

        if response.status_code == 200:
            # Send email verification
            user_data = response.json()
            user_id_token = user_data.get('idToken')
            verification_payload = {
                "requestType": "VERIFY_EMAIL",
                "idToken": user_id_token
            }
            verification_response = requests.post(FIREBASE_VERIFY_EMAIL_URL, json=verification_payload)
            if verification_response.status_code != 200:
                return {'message': 'Failed to send verification email'}, 500
            return {'message': 'User created successfully. Verification email sent.'}, 201
        elif response.status_code == 400:
            return {'message': 'Email Existed.'}, 400
        else:
            return {'message': 'Failed to create user.'}, 500
@api.route('/login')
class Login(Resource):
    @api.expect(login_model)
    def post(self):
        data = request.json
        email = data['email']
        password = data['password']

        try:
            validate_email(email)
        except EmailNotValidError as e:
            return {'message': 'Invalid email format'}, 400

        payload = {
            "email": email,
            "password": password,
            "returnSecureToken": True
        }

        response = requests.post(FIREBASE_VERIFY_PASSWORD_URL, json=payload)
        print(response.json)  # Print response content for debugging

        if response.status_code == 200:
            response_data = response.json()
            user_id_token = response_data.get('idToken')
            # Check if the email is verified
            user = auth.verify_id_token(user_id_token)
            if not user['email_verified']:
                return {'message': 'Email not verified. Please verify your email to log in.'}, 401
            else:
                return {'message': 'Login successful', 'idToken': user_id_token}, 200
        elif response.status_code == 400:
            return {'message': 'Invalid credentials'}, 401
        else:
            return {'message': 'Login failed'}, 500

@api.route('/forgot-password')
class ForgotPassword(Resource):
    @api.expect(forgot_password_model)
    def post(self):
        data = request.json
        email = data['email']

        try:
            validate_email(email)
        except EmailNotValidError as e:
            return {'message': 'Invalid email format'}, 400

        payload = {
            "requestType": "PASSWORD_RESET",
            "email": email
        }

        response = requests.post(FIREBASE_VERIFY_EMAIL_URL, json=payload)
        print(response.json)  # Print response content for debugging

        if response.status_code == 200:
            return {'message': 'Password reset email sent successfully'}, 200
        elif response.status_code == 400:
            return {'message': 'Invalid request. Please provide a valid email address.'}, 400
        else:
            return {'message': 'Failed to send password reset email'}, 500


if __name__ == '__main__':
    app.run(debug=True)
