from fastapi import FastAPI
from pydantic import BaseModel

class UserRegister(BaseModel):
    name: str
    email: str
    password: str

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/user/register")
def register_user(user: UserRegister):
    return {"message": "User registered successfully", "user": user.email}

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/user/login")
def login_user(user: UserLogin):
    return {"message": "Login successful", "token": "fake-token"}
