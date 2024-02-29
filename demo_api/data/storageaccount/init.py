from os import environ
from dotenv import load_dotenv
from azure.storage.blob import BlobServiceClient

load_dotenv(override=True)

blob_service_client:BlobServiceClient | None = None
storage_account_container:str |None=None

def storage_init():
    AZURE_STORAGE_CONNECTION_STRING = environ.get("AZURE_STORAGE_CONNECTION_STRING")
    AZURE_STORAGE_CONTAINER = environ.get("AZURE_STORAGE_CONTAINER")
    global blob_service_client
    global storage_account_container


    storage_account_container = AZURE_STORAGE_CONTAINER
    blob_service_client =  BlobServiceClient.from_connection_string(AZURE_STORAGE_CONNECTION_STRING)


storage_init()