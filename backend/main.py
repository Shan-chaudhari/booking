from fastapi import FastAPI
from pydantic import BaseModel
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import secrets

class UserRegister(BaseModel): #defines what registration data looks like/validates incoming requests
    name: str
    email: str
    password: str

# Email configuration
conf = ConnectionConfig(
    MAIL_USERNAME="your-email@gmail.com",
    MAIL_PASSWORD="your-app-password",
    MAIL_FROM="noreply@ihjaz.com",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True
)

# In-memory storage for demo (use database in production)
verification_codes = {}

app = FastAPI() #server creation/ready to handle requests

@app.post("/user/register")
async def register_user(user: UserRegister):
    if "@" not in user.email:
        return {"error": "Invalid email format"}

    # Generate 6-digit verification code
    verification_code = str(secrets.randbelow(1000000)).zfill(6)
    verification_codes[user.email] = verification_code

    # Send verification email
    try:
        message = MessageSchema(
            subject="Verify your Ihjaz account",
            recipients=[user.email],
            body=f"""
            Hi {user.name},
            
            Welcome to Ihjaz! Your verification code is:
            
            {verification_code}
            
            This code will expire in 10 minutes.
            
            Best regards,
            The Ihjaz Team
            """,
            subtype="plain"
        )

        fm = FastMail(conf)
        await fm.send_message(message)

        return {
            "message": "Registration successful! Please check your email for verification code.",
            "email": user.email,
            "requires_verification": True
        }
    except Exception as e:
        return {"error": f"Failed to send verification email: {str(e)}"}

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/user/login")
def login_user(user: UserLogin):
    return {"message": "Login successful", "token": "fake-token"}

# Verification models
class EmailVerification(BaseModel):
    email: str
    code: str

class ResendVerification(BaseModel):
    email: str

@app.post("/user/logout")
def logout_user():
    return {"message": "Logout successful"}

@app.post("/user/verify-email")
def verify_email(verification: EmailVerification):
    if verification.email not in verification_codes:
        return {"error": "No verification code sent to this email"}
    
    if verification_codes[verification.email] == verification.code:
        # Clear the verification code after successful verification
        del verification_codes[verification.email]
        return {"message": "Email verified successfully!", "verified": True}
    else:
        return {"error": "Invalid verification code"}

@app.post("/user/resend-verification")
async def resend_verification(request: ResendVerification):
    if "@" not in request.email:
        return {"error": "Invalid email format"}
    
    # Generate new 6-digit verification code
    verification_code = str(secrets.randbelow(1000000)).zfill(6)
    verification_codes[request.email] = verification_code

    # Send verification email
    try:
        message = MessageSchema(
            subject="Verify your Ihjaz account",
            recipients=[request.email],
            body=f"""
            Hi,
            
            Your new verification code is:
            
            {verification_code}
            
            This code will expire in 10 minutes.
            
            Best regards,
            The Ihjaz Team
            """,
            subtype="plain"
        )

        fm = FastMail(conf)
        await fm.send_message(message)

        return {
            "message": "Verification code resent! Please check your email.",
            "email": request.email
        }
    except Exception as e:
        return {"error": f"Failed to send verification email: {str(e)}"}

    