from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()

class Message(BaseModel):
    message: str

# Carrega o modelo treinado
modelo = joblib.load('model/classificador.joblib')

@app.post("/predict")
def predict(msg: Message):
    texto = msg.message
    intencao = modelo.predict([texto])[0]
    confianca = max(modelo.predict_proba([texto])[0])
    return {
        "intencao": intencao,
        "confianca": round(float(confianca), 2)
    }
