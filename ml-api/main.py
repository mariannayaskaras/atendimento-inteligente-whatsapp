from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Message(BaseModel):
    message: str

@app.post("/predict")
def predict(msg: Message):
    # Mock inicial — aqui entra o modelo depois
    return {
        "intencao": "Reclamação",
        "confianca": 0.93
    }
