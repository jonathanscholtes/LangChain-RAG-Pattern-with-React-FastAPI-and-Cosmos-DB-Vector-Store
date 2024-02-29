from .init import blob_service_client, storage_account_container
import io
import base64



def get_image_bytes(blob_name) -> str:
    
    blob_client = blob_service_client.get_blob_client(container=storage_account_container, blob=blob_name)
    stream = io.BytesIO()
    blob_client.download_blob().readinto(stream)

    return "data:image/png;base64," + str(base64.b64encode(stream.getvalue())).replace("b'","").replace("'","")