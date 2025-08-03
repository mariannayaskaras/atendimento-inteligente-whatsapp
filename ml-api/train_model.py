import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline
import joblib

# Dataset simples (você pode trocar depois por um real)
dados = {
    "mensagem": [
        "quero cancelar meu plano",
        "me ajuda com meu pedido",
        "quanto custa isso?",
        "obrigado, até logo",
        "vou fazer uma reclamação",
        "não estou satisfeito",
        "pode me informar sobre o produto?",
        "valeu pela ajuda"
    ],
    "intencao": [
        "Reclamação",
        "Ajuda",
        "Compras",
        "Despedida",
        "Reclamação",
        "Reclamação",
        "Compras",
        "Despedida"
    ]
}

df = pd.DataFrame(dados)

# Treina o modelo
modelo = make_pipeline(CountVectorizer(), LogisticRegression())
modelo.fit(df['mensagem'], df['intencao'])

# Salva o modelo
joblib.dump(modelo, 'model/classificador.joblib')
print("✅ Modelo treinado e salvo em model/classificador.joblib")
