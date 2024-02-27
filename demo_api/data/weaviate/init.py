import weaviate
from os import environ
from dotenv import load_dotenv

load_dotenv()


client: weaviate.Client | None = None
VECTORDB_ENDPOINT = environ.get("VECTORDB_ENDPOINT")
VECTORDB_API_KEY = environ.get("VECTORDB_API_KEY")

def weaviate_init():
    global client
    client= weaviate.Client(
    url=VECTORDB_ENDPOINT, 
    auth_client_secret=weaviate.AuthApiKey(api_key=VECTORDB_API_KEY))
    
weaviate_init()