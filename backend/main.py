from fastapi import FastAPI
from pydantic import BaseModel

class UserRegister(BaseModel): #defines what registration data looks like/validates incoming requests
    name: str
    email: str
    password: str

app = FastAPI() #server creation/ready to handle http requests

@app.post("/user/register")
def register_user(user: UserRegister):
    if "@" not in user.email:
        return {"error": "Invalid email format"}

    return {"message": "User registered successfully", "name": user.name, "email": user.email}

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/user/login")
def login_user(user: UserLogin):
    return {"message": "Login successful", "token": "fake-token"}
